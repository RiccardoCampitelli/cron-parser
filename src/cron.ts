import {
  calculateRange,
  calculateList,
  calculateSteps,
  tryParseInt,
} from "./calculations";

const buildArray = (to: number) => {
  return Array.from({ length: to }, (_, idx) => idx);
};

const parseCron = (input: string, allElements: number[]): number[] => {
  if (input.includes(",")) {
    let result: number[] = [];

    const sections = input.split(",");

    for (let i = 0; i < sections.length; i++) {
      const sectionResult = parseCron(sections[i], allElements);

      result.push(...sectionResult);
    }

    return [...new Set(result)];
  }

  if (input === "*") {
    return allElements;
  }
  
  if (input.includes("/")) {
    return calculateSteps(input, allElements);
  }

  if (input.includes("-")) {
    return calculateRange(input, allElements);
  }


  if (allElements.includes(tryParseInt(input)) === false) {
    throw new Error("Invalid input");
  }

  return [tryParseInt(input)];
};

const plusOne = (el: number) => el + 1;

const days = buildArray(7);
const months = buildArray(12).map(plusOne);
const daysInMonth = buildArray(31).map(plusOne);
const hours = buildArray(24);
const minutes = buildArray(60);

const printAsString = (input: number[]) => {
  return input.join(" ");
};

export const printCron = (cron: string) => {
  const [min, hour, dayMonth, month, dayWeek, command] = cron.split(" ");

  try {
    const parsedMin = parseCron(min, minutes);
    const parsedHour = parseCron(hour, hours);
    const parsedDayMonth = parseCron(dayMonth, daysInMonth);
    const parsedMonth = parseCron(month, months);
    const parsedDayWeek = parseCron(dayWeek, days);

    console.log(`minute        ${printAsString(parsedMin)}`);
    console.log(`hour          ${printAsString(parsedHour)}`);
    console.log(`day of month  ${printAsString(parsedDayMonth)}`);
    console.log(`month         ${printAsString(parsedMonth)}`);
    console.log(`day of week   ${printAsString(parsedDayWeek)}`);
    console.log(`command       ${command}`);
  } catch (error: unknown | Error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
