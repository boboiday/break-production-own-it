import { mkdirSync, writeFileSync } from "node:fs";

const line = "I dropped the production database at 03:12. The backup job I wrote last week never ran. I am the incident.";

if (line.length < 1 || line.length > 200) {
  throw new Error("entry line must be 1-200 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
