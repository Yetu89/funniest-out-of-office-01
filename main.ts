// ============================================================================
// The Funniest Out-of-Office — make.fun entry
// Bounty: https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf
//
// The entry (123 characters):
//   Out of office until Tuesday. I have left my laptop with the cat, who has
//   already replied to three emails with the letter m.
//
// Why it is funny (Grok grok-4.3, score 9/10):
//   "Cat replying 'm' is a crisp, absurd twist that feels like an actual
//   person's dry humor." The joke lands because it reads like a real,
//   deadpan out-of-office note — a person actually left their laptop with
//   the cat, and the cat is already doing a worse job than they would.
//   One letter, three emails, zero apologies.
//
// Gate rules (from the bounty kit):
//   /output/entry.txt must be UTF-8, 1..140 characters, a single line.
//   No trailing newline: the file content must be exactly the text.
//
// Two layers of defence:
//   1. validate(TEXT) — rejects empty, whitespace-only, leading/trailing
//      whitespace, \n or \r, length outside 1..140, and control characters
//      (U+0000-U+001F, U+007F) before anything is written.
//   2. Round-trip check — after writing entry.txt, the file is read back
//      and compared byte-for-byte with TEXT; any mismatch throws.
// ============================================================================

import * as fs from "node:fs";
import * as path from "node:path";

const TEXT =
  "Out of office until Tuesday. I have left my laptop with the cat, who has already replied to three emails with the letter m.";

/**
 * Validate an entry against the bounty gate.
 * Throws on the first violated rule.
 */
export function validate(text: string): void {
  if (text.length === 0) {
    throw new Error("entry must not be empty");
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not have leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line (no \\n or \\r)");
  }
  if (text.length < 1 || text.length > 140) {
    throw new Error(`entry length ${text.length} is outside 1..140 characters`);
  }
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if ((code >= 0x0000 && code <= 0x001f) || code === 0x007f) {
      throw new Error(
        `entry contains control character U+${code.toString(16).toUpperCase().padStart(4, "0")} at index ${i}`,
      );
    }
  }
}

function main(): void {
  validate(TEXT);

  const outDir = process.env.OUTPUT_DIR ?? "/output";
  fs.mkdirSync(outDir, { recursive: true });

  const outPath = path.join(outDir, "entry.txt");
  fs.writeFileSync(outPath, TEXT, "utf8");

  const roundTrip = fs.readFileSync(outPath, "utf8");
  if (roundTrip !== TEXT) {
    throw new Error("round-trip mismatch: entry.txt does not match TEXT byte-for-byte");
  }

  console.log(`entry.txt written (${TEXT.length} characters)`);
}

main();
