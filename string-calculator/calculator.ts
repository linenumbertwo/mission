export function calculateStringExpression(stringExpression: string): number {
  if (stringExpression.startsWith('//')) {
    const regex = /\/\/([^]*)\n/;
    const customDelimiter = stringExpression.match(regex);

    if (customDelimiter) {
      const delimiter = customDelimiter[1];
      const expression = stringExpression.split('\n')[1];

      const delimiterRegex = new RegExp(`[${delimiter}]`);
      const splitted = expression.split(delimiterRegex);

      const parsedNumbers = splitted.map((operand) => {
        const parsed = parseInt(operand, 10);
        if (isNaN(parsed) || parsed < 0) {
          throw new Error('Invalid input');
        }
        return parsed;
      });

      return parsedNumbers.reduce((acc, curr) => {
        return acc + curr;
      }, 0);
    } else {
      throw new Error('Invalid input');
    }
  } else {
    const delimiterRegex = new RegExp(`[,;]`);
    const splitted = stringExpression.split(delimiterRegex);

    const parsedNumbers = splitted.map((operand) => {
      const parsed = parseInt(operand, 10);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error('Invalid input');
      }
      return parsed;
    });

    return parsedNumbers.reduce((acc, curr) => {
      return acc + curr;
    }, 0);
  }
}

const a = calculateStringExpression('1;2;3');
console.log(a);
const b = calculateStringExpression('//,#;\n1#2&3');
console.log(b);
