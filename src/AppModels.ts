import { ModelStore } from 'exredux';
import { VagasRecentesModel } from './Models/VagasRecentesModel';
import { VagasEncontradasBuscaModel } from './Models/VagasEncontradasBuscaModel';
import { AuthModel } from './Models/AuthModel';
import { RouterModel } from './Models/RouterModel';
import { VagaDetalheModel } from './Models/VagaDetalheModel';
import { DadosPessoaisModel } from './Models/DadosPessoaisModel';
import { DadosEnderecoModel } from './Models/DadosEnderecoModel';
import { DadosProfissionaisModel } from './Models/DadosProfissionaisModel';


export const appModels = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: [VagasRecentesModel, 
           VagasEncontradasBuscaModel, 
           VagaDetalheModel, 
           AuthModel, 
           RouterModel, 
           DadosPessoaisModel, 
           DadosEnderecoModel,
           DadosProfissionaisModel]
});