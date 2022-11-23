import express from 'express';
import CarsController from './Controllers/Cars.controller';

const app = express();

app.use(express.json());

const carsController = new CarsController();

app.post('/cars', carsController.create);

export default app;
