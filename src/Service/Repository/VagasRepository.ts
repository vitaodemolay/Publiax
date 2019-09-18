import { IVagasResult } from '../Interfaces/IVagasResult';


class MockResults{
    
    public static requestVagasRecentesFake = new Promise<any>((resolve) => {
        setTimeout(() => {
            const result: IVagasResult = {
                data: [
                    { id: 1, descricao: 'Promotor', publicacao: new Date(2019, 8, 16, 7, 0), url: 'Promotor' },
                    { id: 2, descricao: 'Atendente', publicacao: new Date(2019, 8, 17, 20, 15), url: 'Atendente' },
                    { id: 3, descricao: 'Recepcionista', publicacao: new Date(), url: 'Recepcionista' }
                ]
            };
    
            const response = {
                data: result,
                status: 200,
                statusText: '',
                headers: null,
                config: null
            };
    
            resolve(response);
        }, 2000);
    });

    public static requestBuscaVagasFake(value : string) : Promise<any>
    {
        return(
            new Promise<any>((resolve) => {
                setTimeout(() => {
                    const result: IVagasResult = {
                        data: [
                            { id: 1, descricao: `Resultado ${value} Promotor`, publicacao: new Date(2019, 8, 16, 7, 0), url: 'Promotor' },
                            { id: 2, descricao: `Resultado ${value} Atendente`, publicacao: new Date(2019, 8, 17, 20, 15), url: 'Atendente' },
                            { id: 3, descricao: `Resultado ${value} Recepcionista`, publicacao: new Date(), url: 'Recepcionista' }
                        ]
                    };
            
                    const response = {
                        data: result,
                        status: 200,
                        statusText: '',
                        headers: null,
                        config: null
                    };
            
                    resolve(response);
                }, 2000);
            })
        );
    }
}



export class VagasRepository {
    static getBuscarVagas(filtro: string): import('axios').AxiosPromise<IVagasResult> {
        return MockResults.requestBuscaVagasFake(filtro);
    }

    static getVagasRecentes() {
        return MockResults.requestVagasRecentesFake;
    }
}



