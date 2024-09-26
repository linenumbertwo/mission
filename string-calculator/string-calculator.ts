import { sum } from '../utils/sum';

/**
 *
 * @case "" => 0
 * @case "1,2" => 3
 * @case "1,2,3" => 6
 * @case "1,2;3" => 6
 * @case "//;\n1;2;3" => 6
 * @case "//,#;\n1,2#3;4" => 10
 */
export function calculateStringExpression(stringExpression: string): number {
  if (stringExpression === '') {
    return 0;
  }

  if (stringExpression.startsWith('//')) {
    const [customDelimiter, expression] = stringExpression.split('\n');
    const extract = customDelimiter.replace('//', '').split('');
    const regex = new RegExp(`[${extract.join('|')}]`);
    const operands = expression.split(regex).map((operand) => {
      const transformed = Number(operand);
      if (isNaN(transformed)) {
        throw new Error('Invalid operand');
      }

      if (transformed < 0) {
        throw new Error('Negative operand');
      }

      return transformed;
    });

    return sum(operands);
  }

  const regex = new RegExp(/[,|;]/);
  const operands = stringExpression.split(regex).map((operand) => {
    const transformed = Number(operand);
    if (isNaN(transformed)) {
      throw new Error('Invalid operand');
    }

    if (transformed < 0) {
      throw new Error('Negative operand');
    }

    return transformed;
  });

  return sum(operands);
}
