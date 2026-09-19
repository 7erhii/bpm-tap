import { spawn } from 'node:child_process';

function run(args, { input } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn('npx', ['wrangler', ...args], {
      stdio: input === undefined ? 'inherit' : ['pipe', 'inherit', 'inherit'],
    });
    if (input !== undefined) {
      child.stdin.write(input);
      child.stdin.end();
    }
    child.on('error', reject);
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`wrangler ${args.join(' ')} exited ${code}`));
    });
  });
}

const key = process.env.RESEND_API_KEY?.trim();

await run(['deploy', '--keep-vars']);

// Git/wrangler deploy can drop dashboard secrets. Re-apply from Cloudflare *build* env.
if (key) {
  await run(['secret', 'put', 'RESEND_API_KEY'], { input: key });
} else {
  console.warn('RESEND_API_KEY missing in build env; runtime secret was not refreshed');
}
