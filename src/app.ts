import express from 'express';
import CarsController from './Controllers/Cars.controller';
import MotorcyclesController from './Controllers/Motorcycles.controller';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(express.json());

const carsController = new CarsController();

app.post('/cars', carsController.create);
app.get('/cars', carsController.getAll);
app.get('/cars/:id', carsController.getById);
app.put('/cars/:id', carsController.update);

const motorcyclesController = new MotorcyclesController();

app.post('/motorcycles', motorcyclesController.create);
app.get('/motorcycles', motorcyclesController.getAll);
app.get('/motorcycles/:id', motorcyclesController.getById);
app.put('/motorcycles/:id', motorcyclesController.update);

app.use(ErrorHandler);

export default app;
