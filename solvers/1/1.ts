export const solve = (input: string) => {
  const lines = input.split("\n");

  let count = 0;
  for (const line of lines) {
    const numbers = line
      .split("")
      .filter((c) => c.charCodeAt(0) >= 48 && c.charCodeAt(0) <= 57);
    count += Number(numbers[0] + numbers[numbers.length - 1]);
  }

  return count;
};
