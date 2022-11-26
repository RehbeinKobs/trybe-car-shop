import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotoMock from '../Mocks/MotoMock';
import MotorcyclesService from '../../../src/Services/Motorcycles.service';
import IError from '../../../src/Interfaces/IError';

describe('Motorcycle service tests', function () {
  const model = new MotorcyclesService();
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
  it('a função getById falha caso não encontrado um carro', async function () {
    sinon.stub(Model, 'findById').resolves(false);
    try {
      await model.getById('id');
    } catch (e) {
      const error = e as IError;
      expect(error.status).to.equal(404);
    }
  });
  it('a função getById falha caso o id esteja incorreto', async function () {
    sinon.stub(Model, 'findById').callsFake(() => { throw new Error(); });
    try {
      await model.getById('id');
    } catch (e) {
      const error = e as IError;
      expect(error.status).to.equal(422);
    }
  });
  it('a função update funciona corretamente', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(MotoMock);
    const response = await model.update('id', MotoMock);
    expect(response).to.equal(undefined);
  });
  it('a função update falha caso não encontrado um carro', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').resolves(false);
    try {
      await model.update('id', MotoMock);
    } catch (e) {
      const error = e as IError;
      expect(error.status).to.equal(404);
    }
  });
  it('a função update falha caso o id esteja incorreto', async function () {
    sinon.stub(Model, 'findByIdAndUpdate').callsFake(() => { throw new Error(); });
    try {
      await model.update('id', MotoMock);
    } catch (e) {
      const error = e as IError;
      expect(error.status).to.equal(422);
    }
  });

  afterEach(function () {
    sinon.restore();
  });
});
