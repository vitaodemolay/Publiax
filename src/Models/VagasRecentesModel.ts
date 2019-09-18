import { Model, BaseHttpModel, Action } from 'exredux';
import { IVagasResult } from '../Service/Interfaces/IVagasResult';
import { VagasRepository } from '../Service/Repository/VagasRepository';


@Model
export class VagasRecentesModel extends BaseHttpModel<IVagasResult>{

    @Action
    public get(){
        this.request(VagasRepository.getVagasRecentes());
    }
}