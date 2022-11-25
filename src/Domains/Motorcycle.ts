import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super(moto);
    const { category, engineCapacity } = moto;
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;