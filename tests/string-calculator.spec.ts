import { calculateStringExpression } from '../string-calculator/string-calculator';

describe('문자열 계산기', () => {
  it('빈 문자열에 대응이 되어있는가', () => {
    expect(calculateStringExpression('')).toBe(0);
  });

  it('쉼표(,)로 구분된 문자열에 대응이 되어있는가', () => {
    expect(calculateStringExpression('1,2')).toBe(3);
    expect(calculateStringExpression('1,2,3')).toBe(6);
  });

  it('세미콜론(;)로 구분된 문자열에 대응이 되어있는가', () => {
    expect(calculateStringExpression('1;2')).toBe(3);
    expect(calculateStringExpression('1;2;4')).toBe(7);
  });

  it('쉼표(,)와 세미콜론(;)으로 구분된 문자열에 대응이 되어있는가', () => {
    expect(calculateStringExpression('1,2;3;4,5')).toBe(15);
    expect(calculateStringExpression('1,2,3')).toBe(6);
    expect(calculateStringExpression('1;2;3')).toBe(6);
  });

  it('커스텀 구분자로 구성된 문자열에 대응이 되어있는가', () => {
    expect(calculateStringExpression('//,#;\n1,2#3;4')).toBe(10);
    expect(calculateStringExpression('//!@#$%^&*(\n1!2@3#4$5%6')).toBe(21);
  });

  it('음수가 포함된 문자열에 대응이 되어있는가', () => {
    expect(() => calculateStringExpression('1,-2')).toThrow('Negative operand');
    expect(() => calculateStringExpression('1,-2,-3')).toThrow(
      'Negative operand'
    );
  });

  it('유효하지 않은 문자열에 대응이 되어있는가', () => {
    expect(() => calculateStringExpression('1,a,3')).toThrow('Invalid operand');
    expect(() => calculateStringExpression('a')).toThrow('Invalid operand');
  });
});
