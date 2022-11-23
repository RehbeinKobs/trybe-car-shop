import express from 'express';
import CarsController from './Controllers/Cars.controller';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(express.json());

const carsController = new CarsController();

app.post('/cars', carsController.create);
app.get('/cars', carsController.getAll);
app.get('/cars/:id', carsController.getById);

app.use(ErrorHandler);

export default app;
