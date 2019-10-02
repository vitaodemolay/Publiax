
import { Model, Action } from 'exredux';

@Model
export class VagaTools {
   
    @Action
    public static getPublicacaoToString(publicacao){
        const _publicacao = new Date(publicacao);
        let calc = (new Date().getDay()) - _publicacao.getDay();
        if(calc > 0){
            return `Publicado há ${calc} dias`;
        }

        calc = (new Date().getHours()) - _publicacao.getHours();
        return  `Publicado há ${calc} horas`;
    }
}