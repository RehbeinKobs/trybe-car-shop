import IError from '../Interfaces/IError';

const createError = (status: number, message: string) => {
  const error = new Error(message) as IError;
  error.status = status;  
  return error;
};

export default createError;