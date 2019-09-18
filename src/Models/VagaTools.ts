
import { Model, Action } from 'exredux';

@Model
export class VagaTools {
   
    @Action
    public static getPublicacaoToString(publicacao : Date){
        let calc = (new Date().getDay()) - publicacao.getDay();
        if(calc > 0){
            return `Publicado há ${calc} dias`;
        }

        calc = (new Date().getHours()) - publicacao.getHours();
        return  `Publicado há ${calc} horas`;
    }
}