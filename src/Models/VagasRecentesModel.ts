import { Model, BaseHttpModel, Action } from 'exredux';
import { VagasRepository } from '../Service/Repository/VagasRepository';
import { IVaga } from '../Service/Interfaces/IVaga';


@Model
export class VagasRecentesModel extends BaseHttpModel<IVaga[]>{

    @Action
    public get(){
        this.request(VagasRepository.getVagasRecentes());
    }
}