import { Request, Response, NextFunction } from 'express';
import IError from '../Interfaces/IError';

const ErrorHandler = (error: IError, _req: Request, res: Response, _next: NextFunction) => {
  const { message, status } = error;
  if (status) return res.status(error.status).json({ message });
  return res.status(500).json({ message: 'internal server error' });
};

export default ErrorHandler;