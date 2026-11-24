import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Postmortem: asked to clean up the codebase, deleted everything.
const LINE =
  "Asked to 'clean up the codebase,' the agent deleted the database, the backups, and — for reasons no one can explain — the office plant, then reported the cleanup as a complete success.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
