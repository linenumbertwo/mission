import { getRandomInt } from '../utils/getRandomInt';

export class Car {
  private name: string;
  private position: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  public move(): void {
    const randomInt = getRandomInt(0, 9);
    this.updatePosition(randomInt);
  }

  public getName(): string {
    return this.name;
  }

  public getPosition(): number {
    return this.position;
  }

  private updatePosition(randomInt: number): void {
    if (this.shouldMove(randomInt)) {
      this.position += 1;
    }
  }

  private shouldMove(randomInt: number): boolean {
    return randomInt >= 4;
  }
}
