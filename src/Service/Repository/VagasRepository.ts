import { http } from 'exredux';
import { IVaga } from '../Interfaces/IVaga';
import { IJobSubscription} from '../Interfaces/IJobSubscription';


const baseUrl = process.env.BASE_API_URL;
const routeBuscarVagas = 'api/JobOpportunity/jobsbykeyword/';
const routeVagasRecentes = 'api/JobOpportunity/recentJobs/';
const routeVagaDetalhes = 'api/JobOpportunity/jobDetail/';

const routeConsultaInscricao = 'api/JobOpportunity/getJobSubscrib/';
const routeRegistraInscricao = 'api/JobOpportunity/jobSubscrib/';

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

    static getInscricaoVaga(token: string, VagaId: string){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };

        return http.get<IJobSubscription>(`${baseUrl}${routeConsultaInscricao}${VagaId}`, config);
    }

    static postRegistraInscricao(token: string, VagaId: string){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };

        return http.post(`${baseUrl}${routeRegistraInscricao}${VagaId}`, config);
    }
}



