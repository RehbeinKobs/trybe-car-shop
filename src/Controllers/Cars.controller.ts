import { Request, Response } from 'express';
import CarsService from '../Services/Cars.service';

class CarsController {
  private carsService: CarsService;

  constructor() {
    this.carsService = new CarsService();
  }

  public create = async (req: Request, res: Response) => {
    const { body } = req;
    const response = await this.carsService.create(body);
    res.status(201).json(response);
  };
}

export default CarsController;