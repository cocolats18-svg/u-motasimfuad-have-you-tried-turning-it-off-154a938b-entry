// "Have You Tried Turning It Off?" — make.fun entry
// Writes one funny single-line reply from a hopeless tech support agent
// to a desperate customer, to <output dir>/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: a hopeless tech support agent twists the classic
// "turn it off and on again" — cheerfully admitting he tried it
// himself and it fixed nothing, yet offering it as shared hope.
// The customer's desperation is felt, never mocked; the agent's
// uselessness is the joke.
const line =
  "Have you tried turning it off and on again? I just did, and it fixed nothing — but it gave us both something to hope for.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
console.log(line);
