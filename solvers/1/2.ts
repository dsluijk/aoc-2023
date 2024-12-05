export const solve = (input: string) => {
  let replaced = input;
  replaced = replaced.replaceAll("one", "one1one");
  replaced = replaced.replaceAll("two", "two2two");
  replaced = replaced.replaceAll("three", "three3three");
  replaced = replaced.replaceAll("four", "four4four");
  replaced = replaced.replaceAll("five", "five5five");
  replaced = replaced.replaceAll("six", "six6six");
  replaced = replaced.replaceAll("seven", "seven7seven");
  replaced = replaced.replaceAll("eight", "eight8eight");
  replaced = replaced.replaceAll("nine", "nine9nine");

  const lines = replaced.split("\n");
  let count = 0;

  for (const line of lines) {
    const numbers = line
      .split("")
      .filter((c) => c.charCodeAt(0) >= 49 && c.charCodeAt(0) <= 57);

    count += Number(numbers[0] + numbers[numbers.length - 1]);
  }

  return count;
};
