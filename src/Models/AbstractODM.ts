import { Model, Schema, model, models } from 'mongoose';

abstract class AbstractODM<T> {
  protected schema: Schema;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.model = models[modelName] || model(modelName, this.schema);
  }

  public create = (vehicle: T) => this.model.create({ ...vehicle });
  public getAll = () => this.model.find({});
  public getById = (id: string) => this.model.findById(id);
  public update = (id: string, body: T) => this.model.findByIdAndUpdate(id, { ...body });
}

export default AbstractODM;