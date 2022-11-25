import MotorcyclesODM from '../Models/Motorcycles.model';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import createError from '../Utils/createError';
import IError from '../Interfaces/IError';

class MotorcyclesService {
  private motorcyclesModel: MotorcyclesODM;

  constructor() {
    this.motorcyclesModel = new MotorcyclesODM();
  }

  public create = async (body: IMotorcycle): Promise<Motorcycle> => {
    const response = await this.motorcyclesModel.create(body);
    return new Motorcycle(response);
  };

  public update = async (id: string, body: IMotorcycle): Promise<void> => {
    try {
      const response = await this.motorcyclesModel.update(id, body);
      if (!response) throw createError(404, 'Motorcycle not found');
    } catch (e) {
      const error = e as IError; 
      if (error.status) throw error;
      throw createError(422, 'Invalid mongo id');
    }
  };

  public getAll = async (): Promise<Motorcycle[]> => {
    const response = await this.motorcyclesModel.getAll();
    return response.map((moto: IMotorcycle) => new Motorcycle(moto));
  };

  public getById = async (id: string): Promise<Motorcycle> => {
    try {
      const response = await this.motorcyclesModel.getById(id);
      if (response) return new Motorcycle(response as IMotorcycle);
      throw createError(404, 'Motorcycle not found');
    } catch (e) {
      const error = e as IError; 
      if (error.status) throw error;
      throw createError(422, 'Invalid mongo id');
    }
  };
}

export default MotorcyclesService;