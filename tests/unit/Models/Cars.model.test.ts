import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarMock from '../Mocks/CarMock';
import CarsODM from '../../../src/Models/Cars.model';

describe('Car model tests', function () {
  const model = new CarsODM();
  it('a função create funciona corretamente', async function () {
    sinon.stub(Model, 'create').resolves(CarMock);
    const response = await model.create(CarMock);
    expect(response).to.deep.equal(CarMock);
  });
  it('a função getAll funciona corretamente', async function () {
    sinon.stub(Model, 'find').resolves([CarMock]);
    const response = await model.getAll();
    expect(response).to.deep.equal([CarMock]);
  });
  it('a função getById funciona corretamente', async function () {
    sinon.stub(Model, 'findById').resolves(CarMock);
    const response = await model.getById('id');
    expect(response).to.deep.equal(CarMock);
  });
  it('a função update funciona corretamente', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(CarMock);
    const response = await model.update('id', CarMock);
    expect(response).to.deep.equal(CarMock);
  });

  afterEach(function () {
    sinon.restore();
  });
});