import { Calculator } from '../simple-calculator';

describe('simple-calculator', () => {
  const calculator = new Calculator();

  it('더하기가 잘 되는가', () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(123421, 123321)).toBe(246742);
    expect(calculator.add(3123, 4949329)).toBe(4952452);
  });

  it('빼기가 잘 되는가', () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.subtract(38, 18)).toBe(20);
    expect(calculator.subtract(30000, 30000)).toBe(0);
  });

  it('곱하기가 잘 되는가', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
    expect(calculator.multiply(123, 321)).toBe(39483);
    expect(calculator.multiply(123, 0)).toBe(1);
  });

  it('나누기가 잘 되는가', () => {
    expect(calculator.divide(1, 2)).toBe(0.5);
    expect(calculator.divide(100, 10)).toBe(10);
    expect(calculator.divide(0, 123)).toBe(0);
    expect(calculator.divide(400, 0.5)).toBe(800);
  });
});
