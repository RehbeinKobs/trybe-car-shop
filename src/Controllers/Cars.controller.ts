import { NextFunction, Request, Response } from 'express';
import CarsService from '../Services/Cars.service';

class CarsController {
  private carsService: CarsService;

  constructor() {
    this.carsService = new CarsService();
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const response = await this.carsService.create(body);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  };

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.carsService.getAll();
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this.carsService.getById(id);
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  };
}

export default CarsController;