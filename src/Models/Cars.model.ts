import { Model, Schema, model, models } from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarsODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.car || model('car', this.schema);
  }

  public create = (car: ICar) => this.model.create({ ...car });
  public getAll = () => this.model.find({});
  public getById = (id: string) => this.model.findById(id);
  public update = (id: string, body: ICar) => this.model.findByIdAndUpdate(id, { ...body });
}

export default CarsODM;