import { http } from 'exredux';
import { IVaga } from '../Interfaces/IVaga';


const baseUrl = process.env.BASE_API_URL;
const routeBuscarVagas = 'api/JobOpportunity/jobsbykeyword/';
const routeVagasRecentes= 'api/JobOpportunity/recentJobs/';
const routeVagaDetalhes= 'api/JobOpportunity/jobDetail/';

export class VagasRepository {
    

    static getBuscarVagas(filtro: string) {
        if(filtro !== undefined && filtro !== ''){
            return http.get<IVaga[]>(`${baseUrl}${routeBuscarVagas}/${filtro}`);
        }
        
        return undefined;
    }

    static getVagasRecentes() {
        return http.get<IVaga[]>(`${baseUrl}${routeVagasRecentes}`);
    }

    static getVagaDetalhe(VagaId: string){
        return http.get<IVaga>(`${baseUrl}${routeVagaDetalhes}/${VagaId}`);
    }
}



