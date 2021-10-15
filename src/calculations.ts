export const tryParseInt = (input: string) => {
  const number = parseInt(input);
  if (Number.isNaN(number)) {
    throw Error("Unable to parse number");
  }

  return number;
};

export const calculateRange = (input: string, allElements: number[]) => {
  const [start, end] = input.split("-");

  const startNum = tryParseInt(start);

  const endNum = tryParseInt(end);

  if (startNum < 0 || startNum > allElements[allElements.length - 1]) {
    throw Error("Out of bounds");
  }

  if (endNum < 0 || endNum > allElements[allElements.length - 1]) {
    throw Error("Out of bounds");
  }

  if (startNum > endNum) {
    throw Error("There must be a difference between the two elements in range");
  }

  const startIndex = allElements.findIndex((el) => el === startNum);
  const endIndex = allElements.findIndex((el) => el === endNum);

  return [...allElements].splice(startIndex, endIndex);
};

export const calculateList = (input: string, allElements: number[]) => {
  const elements = input.split(",").map(tryParseInt);

  for (let i = 0; i < elements.length; i++) {
    const current = elements[i];

    if (allElements.includes(current) === false) {
      throw new Error("invalid input");
    }
  }

  return elements;
};

export const calculateSteps = (input: string, allElements: number[]) => {
  const [base, step] = input.split("/");

  const stepInt = tryParseInt(step);

  if (base === "*") {
    return allElements.filter((el) => el % stepInt === 0);
  }

  const baseInt = tryParseInt(base);

  return [...allElements]
    .splice(baseInt, allElements.length)
    .filter((_, idx) => (idx + 1) % stepInt === 0);
};
