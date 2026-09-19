export type PreviewVoice = 'kick' | 'clap' | 'ch' | 'oh';

export interface PreviewLane {
  id: string;
  steps: boolean[];
}

export function mapLaneVoice(id: string): PreviewVoice | null {
  switch (id) {
    case 'kick':
    case 'clap':
    case 'ch':
    case 'oh':
      return id;
    case 'snare':
      return 'clap';
    default:
      return null;
  }
}

export function voicesAtStep(lanes: PreviewLane[], step: number): PreviewVoice[] {
  const voices = new Set<PreviewVoice>();
  for (const lane of lanes) {
    if (!lane.steps[step]) continue;
    const voice = mapLaneVoice(lane.id);
    if (voice) voices.add(voice);
  }
  if (voices.has('oh')) voices.delete('ch');
  return [...voices];
}

export function sixteenthSeconds(bpm: number): number {
  const tempo = Math.min(300, Math.max(30, bpm));
  return 60 / tempo / 4;
}

export interface PreviewState {
  id: string | null;
  step: number | null;
}

type PreviewListener = (state: PreviewState) => void;

const STEP_COUNT = 16;
const listeners = new Set<PreviewListener>();

let ctx: AudioContext | null = null;
let noise: AudioBuffer | null = null;
let timer: number | null = null;
let nextTime = 0;
let stepIndex = 0;
let currentBpm = 125;
let currentId: string | null = null;
let currentLanes: PreviewLane[] = [];
let ohGain: GainNode | null = null;
let running = false;

function emit() {
  const state: PreviewState = { id: currentId, step: running ? stepIndex : null };
  for (const listener of listeners) listener(state);
}

function ensureContext(): AudioContext {
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

function noiseBuffer(audio: AudioContext): AudioBuffer {
  if (noise && noise.sampleRate === audio.sampleRate) return noise;
  const buffer = audio.createBuffer(1, Math.floor(audio.sampleRate * 0.35), audio.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  noise = buffer;
  return buffer;
}

function playKick(audio: AudioContext, time: number) {
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(168, time);
  osc.frequency.exponentialRampToValueAtTime(48, time + 0.07);
  gain.gain.setValueAtTime(0.72, time);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);
  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start(time);
  osc.stop(time + 0.18);

  const click = audio.createOscillator();
  const clickGain = audio.createGain();
  click.type = 'square';
  click.frequency.value = 420;
  clickGain.gain.setValueAtTime(0.08, time);
  clickGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.012);
  click.connect(clickGain);
  clickGain.connect(audio.destination);
  click.start(time);
  click.stop(time + 0.02);
}

function playNoiseBurst(
  audio: AudioContext,
  time: number,
  opts: { highpass: number; peak: number; decay: number; bandpass?: number },
) {
  const src = audio.createBufferSource();
  src.buffer = noiseBuffer(audio);
  const filter = audio.createBiquadFilter();
  filter.type = opts.bandpass ? 'bandpass' : 'highpass';
  filter.frequency.value = opts.bandpass ?? opts.highpass;
  if (opts.bandpass) filter.Q.value = 1.1;
  const gain = audio.createGain();
  gain.gain.setValueAtTime(opts.peak, time);
  gain.gain.exponentialRampToValueAtTime(0.0001, time + opts.decay);
  src.connect(filter);
  filter.connect(gain);
  gain.connect(audio.destination);
  src.start(time);
  src.stop(time + opts.decay + 0.02);
  return gain;
}

function playClap(audio: AudioContext, time: number) {
  playNoiseBurst(audio, time, { highpass: 800, bandpass: 1400, peak: 0.28, decay: 0.04 });
  playNoiseBurst(audio, time + 0.014, { highpass: 800, bandpass: 1800, peak: 0.18, decay: 0.05 });
  playNoiseBurst(audio, time + 0.028, { highpass: 900, bandpass: 1200, peak: 0.12, decay: 0.07 });
}

function chokeOpenHat(audio: AudioContext, time: number) {
  if (!ohGain) return;
  ohGain.gain.cancelScheduledValues(time);
  ohGain.gain.setValueAtTime(Math.max(ohGain.gain.value, 0.0001), time);
  ohGain.gain.exponentialRampToValueAtTime(0.0001, time + 0.012);
  ohGain = null;
}

function playClosedHat(audio: AudioContext, time: number) {
  chokeOpenHat(audio, time);
  playNoiseBurst(audio, time, { highpass: 7800, peak: 0.14, decay: 0.03 });
}

function playOpenHat(audio: AudioContext, time: number) {
  chokeOpenHat(audio, time);
  ohGain = playNoiseBurst(audio, time, { highpass: 6200, peak: 0.16, decay: 0.2 });
}

function playVoice(audio: AudioContext, time: number, voice: PreviewVoice) {
  switch (voice) {
    case 'kick':
      playKick(audio, time);
      break;
    case 'clap':
      playClap(audio, time);
      break;
    case 'ch':
      playClosedHat(audio, time);
      break;
    case 'oh':
      playOpenHat(audio, time);
      break;
  }
}

function scheduler() {
  if (!ctx || !running) return;
  const stepDur = sixteenthSeconds(currentBpm);
  while (nextTime < ctx.currentTime + 0.12) {
    const step = stepIndex;
    const idAtSchedule = currentId;
    for (const voice of voicesAtStep(currentLanes, step)) {
      playVoice(ctx, nextTime, voice);
    }
    const delayMs = Math.max(0, (nextTime - ctx.currentTime) * 1000);
    window.setTimeout(() => {
      if (!running || currentId !== idAtSchedule || idAtSchedule == null) return;
      for (const listener of listeners) listener({ id: idAtSchedule, step });
    }, delayMs);
    nextTime += stepDur;
    stepIndex = (stepIndex + 1) % STEP_COUNT;
  }
  timer = window.setTimeout(scheduler, 25);
}

function stopInternal() {
  running = false;
  currentId = null;
  stepIndex = 0;
  if (timer != null) {
    window.clearTimeout(timer);
    timer = null;
  }
  if (ctx) chokeOpenHat(ctx, ctx.currentTime);
  emit();
}

export function subscribePatternPreview(listener: PreviewListener): () => void {
  listeners.add(listener);
  listener({ id: currentId, step: running ? stepIndex : null });
  return () => listeners.delete(listener);
}

export function isPatternPreviewRunning(id: string): boolean {
  return running && currentId === id;
}

export async function startPatternPreview(id: string, bpm: number, lanes: PreviewLane[]): Promise<void> {
  const audio = ensureContext();
  if (audio.state === 'suspended') await audio.resume();
  stopInternal();
  currentId = id;
  currentBpm = bpm;
  currentLanes = lanes;
  stepIndex = 0;
  running = true;
  nextTime = audio.currentTime + 0.04;
  emit();
  scheduler();
}

export function stopPatternPreview(): void {
  stopInternal();
}

if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopPatternPreview();
  });
}
