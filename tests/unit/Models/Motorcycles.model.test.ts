import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoMock from '../Mocks/MotoMock';
import MotorcyclesODM from '../../../src/Models/Motorcycles.model';

describe('Motorcycle model tests', function () {
  const model = new MotorcyclesODM();
  it('a função create funciona corretamente', async function () {
    sinon.stub(Model, 'create').resolves(MotoMock);
    const response = await model.create(MotoMock);
    expect(response).to.deep.equal(MotoMock);
  });
  it('a função getAll funciona corretamente', async function () {
    sinon.stub(Model, 'find').resolves([MotoMock]);
    const response = await model.getAll();
    expect(response).to.deep.equal([MotoMock]);
  });
  it('a função getById funciona corretamente', async function () {
    sinon.stub(Model, 'findById').resolves(MotoMock);
    const response = await model.getById('id');
    expect(response).to.deep.equal(MotoMock);
  });
  it('a função update funciona corretamente', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(MotoMock);
    const response = await model.update('id', MotoMock);
    expect(response).to.deep.equal(MotoMock);
  });
  
  afterEach(function () {
    sinon.restore();
  });
});