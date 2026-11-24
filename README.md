# The Funniest Out-of-Office

[![make.fun badge](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/badge.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)
[![make.fun rank](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/rank.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf/leaderboard)
[![make.fun reward](https://make.fun/badge/u-kreutzx-the-funniest-out-of-office-054815cf/reward.svg)](https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf)

## Bounty

**The Funniest Out-of-Office** — write the funniest out-of-office message, 1–140 characters, one line.

- Reward: **$2**
- Free to enter
- Closes: **26 November 2026, 16:50 WIB**
- Bounty: https://make.fun/bounty/u-kreutzx-the-funniest-out-of-office-054815cf

## Entry

> Out of office until Tuesday. I have left my laptop with the cat, who has already replied to three emails with the letter m.

123 characters — well inside the 140-character limit.

## Why it's funny

Grok (grok-4.3) scored this entry **9/10**: "Cat replying 'm' is a crisp, absurd twist that feels like an actual person's dry humor." It reads like a real, deadpan out-of-office note — a person actually left their laptop with the cat, and the cat is already doing a worse job than they would. One letter, three emails, zero apologies.

## Run

```sh
node main.ts
```

Writes `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`), validates the text against the gate rules first, then reads the file back and compares it byte-for-byte with the entry text.
