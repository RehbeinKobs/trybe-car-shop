import CarsODM from '../Models/Cars.model';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';

class CarsService {
  private carsModel: CarsODM;

  constructor() {
    this.carsModel = new CarsODM();
  }

  public create = async (body: ICar): Promise<Car> => {
    const response = await this.carsModel.create(body);
    return new Car(response);
  };
}

export default CarsService;