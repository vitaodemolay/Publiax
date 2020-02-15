import { ModelStore } from 'exredux';
import { VagasRecentesModel } from './Models/VagasRecentesModel';
import { VagasEncontradasBuscaModel } from './Models/VagasEncontradasBuscaModel';
import { AuthModel } from './Models/AuthModel';
import { RouterModel } from './Models/RouterModel';
import { VagaDetalheModel } from './Models/VagaDetalheModel';
import { DadosPessoaisModel } from './Models/DadosPessoaisModel';
import { DadosEnderecoModel } from './Models/DadosEnderecoModel';
import { DadosProfissionaisModel } from './Models/DadosProfissionaisModel';
import { EscolaridadeModel } from './Models/EscolaridadeModel';
import { OutrasQualificacoesModel } from './Models/OutrasQualificacoesModel';
import { LingEstrangeirasModel } from './Models/LingEstrangeirasModel';
import { CartaApresentacaoModel } from './Models/CartaApresentacaoModel';


export const appModels = new ModelStore({
  devExtension: process.env.NODE_ENV === 'development',
  models: [VagasRecentesModel, 
           VagasEncontradasBuscaModel, 
           VagaDetalheModel, 
           AuthModel, 
           RouterModel, 
           DadosPessoaisModel, 
           DadosEnderecoModel,
           DadosProfissionaisModel,
           EscolaridadeModel,
           OutrasQualificacoesModel,
           LingEstrangeirasModel,
           CartaApresentacaoModel,
          ]
});