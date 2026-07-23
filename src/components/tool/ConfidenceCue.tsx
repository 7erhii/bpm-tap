import type { Confidence } from '@/lib/bpm/types';

interface Props {
  level: Confidence;
  label: string;
  deviationBpm?: number | null;
}

export function ConfidenceCue({ level, label, deviationBpm }: Props) {
  const suffix =
    deviationBpm != null && level !== 'none' ? ` · ±${deviationBpm}` : '';
  return (
    <div className="confidence" data-level={level}>
      <span>{label}{suffix}</span>
    </div>
  );
}
