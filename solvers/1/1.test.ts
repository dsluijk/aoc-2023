import { expect, test } from "bun:test";

import { solve } from "./1";

test("example", () => {
  const example = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

  expect(solve(example)).toBe(142);
});
