import { ModelStore } from 'exredux';
import { VagasRecentesModel } from './Models/VagasRecentesModel';
import { VagasEncontradasBuscaModel } from './Models/VagasEncontradasBuscaModel';


export const appModels = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: [VagasRecentesModel, VagasEncontradasBuscaModel]
});