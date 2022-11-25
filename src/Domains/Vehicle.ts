import IVehicle from '../Interfaces/IVehicle';

class Vehicle {
  protected id: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean;
  protected buyValue: number;

  constructor(vehicle: IVehicle) {
    const { id, model, year, color, status, buyValue } = vehicle;
    this.id = id as string;
    this.model = model;
    this.year = year;
    this.color = color;
    this.status = Boolean(status);
    this.buyValue = buyValue;
  }
}

export default Vehicle;