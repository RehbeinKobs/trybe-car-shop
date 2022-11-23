import ICar from '../Interfaces/ICar';

export default class Car {
  protected id: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = car;
    this.id = id as string;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = Boolean(status);
    this.buyValue = buyValue;
    this.doorsQty = doorsQty;
    this.seatsQty = seatsQty;
  }
}