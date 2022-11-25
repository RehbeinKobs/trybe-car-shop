import { NextFunction, Request, Response } from 'express';
import MotorcyclesService from '../Services/Motorcycles.service';

class MotorcyclesController {
  private motorcyclesService: MotorcyclesService;

  constructor() {
    this.motorcyclesService = new MotorcyclesService();
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body } = req;
      const response = await this.motorcyclesService.create(body);
      res.status(201).json(response);
    } catch (e) {
      next(e);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { body, params } = req;
      const { id } = params;
      await this.motorcyclesService.update(id, body);
      res.status(200).json({ id, ...body });
    } catch (e) {
      next(e);
    }
  };

  public getAll = async (_req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.motorcyclesService.getAll();
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const response = await this.motorcyclesService.getById(id);
      res.status(200).json(response);
    } catch (e) {
      next(e);
    }
  };
}

export default MotorcyclesController;