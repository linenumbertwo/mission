import exp from 'constants';
import { Car } from '../moving-car/car';

jest.mock('../utils/getRandomInt', () => ({
  getRandomInt: jest.fn(),
}));

import { getRandomInt } from '../utils/getRandomInt';

describe('Car', () => {
  let player1: Car;
  let player2: Car;

  beforeEach(() => {
    player1 = new Car('BMW i8');
    player2 = new Car('Tesla Model S');
  });

  test('랜덤 숫자 테스트', () => {
    player1.move();
    player1.move();
    player1.move();

    player2.move();
    player2.move();
    player2.move();

    console.log(player1.getPosition(), player2.getPosition());
    expect(player1.getPosition());
  });

  it('자동차 이름을 가져올 수 있다', () => {
    expect(player1.getName()).toBe('BMW i8');
    expect(player2.getName()).toBe('Tesla Model S');
  });

  it('자동차의 위치를 가져올 수 있다', () => {
    expect(player1.getPosition()).toBe(0);
    expect(player2.getPosition()).toBe(0);
  });
});
