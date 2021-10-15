import {
  calculateRange,
  calculateList,
  calculateSteps,
  tryParseInt,
} from "./calculations";

const buildArray = (to: number) => {
  return Array.from({ length: to }, (_, idx) => idx);
};

const parseCron = (input: string, allElements: number[]) => {
  if (input === "*") {
    return allElements.join(" ");
  }

  if (input.includes("-")) {
    
    return calculateRange(input, allElements).join(" ");
  }

  if (input.includes(",")) {
    return calculateList(input, allElements).join(" ");
  }

  if (input.includes("/")) {
    return calculateSteps(input, allElements).join(" ");
  }

  if (allElements.includes(tryParseInt(input)) === false) {
    throw new Error("Invalid input");
  }

  return input;
};

const plusOne = (el: number) => el + 1;

const days = buildArray(7);
const months = buildArray(12).map(plusOne);
const daysInMonth = buildArray(31).map(plusOne);
const hours = buildArray(24);
const minutes = buildArray(60);

export const printCron = (cron: string) => {
  const [min, hour, dayMonth, month, dayWeek, command] = cron.split(" ");

  try {
    const parsedMin = parseCron(min, minutes);
    const parsedHour = parseCron(hour, hours);
    const parsedDayMonth = parseCron(dayMonth, daysInMonth);
    const parsedMonth = parseCron(month, months);
    const parsedDayWeek = parseCron(dayWeek, days);

    console.log(`minute        ${parsedMin}`);
    console.log(`hour          ${parsedHour}`);
    console.log(`day of month  ${parsedDayMonth}`);
    console.log(`month         ${parsedMonth}`);
    console.log(`day of week   ${parsedDayWeek}`);
    console.log(`command       ${command}`);
  } catch (error: unknown | Error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }
};
