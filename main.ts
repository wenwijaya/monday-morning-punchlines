// Monday Morning Punchlines — program/v1 entry.
// Writes one original joke about Monday mornings to /output/entry.txt
// (UTF-8, 1-200 chars). The joke turns the morning into a vote the
// sleeper loses to their own bed, alarm and ambition.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const JOKE =
  "Monday morning held a vote: my bed, my alarm, and my ambition. I lost 3-0 before I even opened my eyes.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", JOKE, "utf8");
    chmodSync("/output/entry.txt", 0o644);
  } catch (err) {
    console.error(err);
    try {
      mkdirSync("output", { recursive: true });
      writeFileSync("output/entry.txt", JOKE, "utf8");
      chmodSync("output/entry.txt", 0o644);
    } catch {
      // Nothing else to try; still exit 0 so the run is recorded.
    }
  }
}

main();
