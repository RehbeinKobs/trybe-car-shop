import CarsODM from '../Models/CarODM';
import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import createError from '../Utils/createError';
import IError from '../Interfaces/IError';

class CarsService {
  private carsModel: CarsODM;

  constructor() {
    this.carsModel = new CarsODM();
  }

  public create = async (body: ICar): Promise<Car> => {
    const response = await this.carsModel.create(body);
    return new Car(response);
  };

  public getAll = async (): Promise<Car[]> => {
    const response = await this.carsModel.getAll();
    return response.map((car: ICar) => new Car(car));
  };

  public getById = async (id: string): Promise<Car> => {
    try {
      const response = await this.carsModel.getById(id);
      if (response) return new Car(response as ICar);
      throw createError(404, 'Car not found');
    } catch (e) {
      const error = e as IError; 
      if (error.status) throw createError(404, 'Car not found');
      throw createError(422, 'Invalid mongo id');
    }
  };
}

export default CarsService;