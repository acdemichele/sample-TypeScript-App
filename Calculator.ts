//  const multiplicatorFunction = (a: number, b: number, printText: string) => {
//   console.log(printText, a * b);
// };

// multiplicatorFunction(10, 20, "Multiplicator Function");

// TODO: Creating Types

interface CalculateReturnValues {
  operand1: number;
  operand2: number;
  operation: operation;
}

const parseArguments = (args: string[]): CalculateReturnValues => {
  if (args.length != 5) throw new Error("Invalid number of arguments");

  // * args[0] is the Path to the Node.js executable
  // * args[1] is the Path to the Typescript executable script (Calculator.ts)
  // * args[2], args[3], etc are the arguments passed
  if (
    !isNaN(Number(args[2])) &&
    !isNaN(Number(args[3])) &&
    (args[4] === "multiply" ||
      args[4] === "divide" ||
      args[4] === "add" ||
      args[4] === "subtract")
  ) {
    return {
      operand1: Number(args[2]),
      operand2: Number(args[3]),
      operation: args[4] as operation,
    };
  } else {
    throw new Error("Invalid arguments provided");
  }
};

type operation = "multiply" | "divide" | "add" | "subtract";
type Result = string | number;
const typescriptCalculator = (a: number, b: number, op: operation): Result => {
  switch (op) {
    case "multiply":
      return `Product: ${a * b}`;

    case "divide":
      if (b === 0) throw new Error("Cannot divide by zero");
      return `Quotient: ${a / b} Remainder: ${a % b}`;

    case "add":
      return `Sum: ${a + b}`;

    case "subtract":
      return `Difference: ${a - b}`;
    default:
      throw new Error(
        "Invalid operation: Operation is not multiply, divide, add or subtract"
      );
  }
};

try {
  const args = process.argv;
  const { operand1, operand2, operation } = parseArguments(process.argv);
  console.log(typescriptCalculator(operand1, operand2, operation));
} catch (error: unknown) {
  let errorMessage = "Something went wrong: ";

  if (error instanceof Error) {
    errorMessage += "Error: " + error.message;
  }
  console.log(errorMessage);
}

// try {
//   console.log(typescriptCalculator(10, 20, "divide"));
// } catch (error: unknown) {
//   let errorMessage = "Something went wrong:";
//   if (error instanceof Error) {
//     errorMessage += error.message;
//   }
//   console.log(errorMessage);
// }
