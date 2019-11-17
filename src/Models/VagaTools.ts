
import { Model, Action } from 'exredux';
import moment from 'moment';

@Model
export class VagaTools {
   
    @Action
    public static getPublicacaoToString(publicacao){
        const _publicacao = new Date(publicacao);

        let calc = moment().diff(_publicacao, 'hours');
        if(calc <= 24){
            return  `Publicado há ${calc} horas`; 
        }

        calc = moment().diff(_publicacao, 'days');
        return `Publicado há ${calc} dias`;
    }


    @Action
    public static getPublicacaoFormat(publicacao){
        const _publicacao = new Date(publicacao);
        moment.locale('pt-br');
        return moment(_publicacao).format('lll');
    }
}