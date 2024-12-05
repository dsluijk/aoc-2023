import { expect, test } from "bun:test";

import { solve } from "./2";

test("example", () => {
  const example = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

  expect(solve(example)).toBe(281);
});

test("edge case", () => {
  const example = `eighthree
sevenine
oneight`;

  expect(solve(example)).toBe(83 + 79 + 18);
});
