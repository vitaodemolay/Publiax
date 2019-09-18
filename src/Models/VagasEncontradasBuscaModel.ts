import { Model, Action, BaseHttpModel } from 'exredux';
import { IVagasResult } from '../Service/Interfaces/IVagasResult';
import { VagasRepository } from '../Service/Repository/VagasRepository';


@Model
export class VagasEncontradasBuscaModel extends BaseHttpModel<IVagasResult>{
    _isResultVisible : boolean = false;
    _vagasEncontradas : IVagasResult;
    
    public isResultVisible = () : boolean => {
        return this._isResultVisible;
    }
    
    @Action
    public setResultIsVisible(value : boolean){
        this._isResultVisible = value;
    }

    @Action
    public getBuscarVagas(filtro : string){
        this.request(VagasRepository.getBuscarVagas(filtro));
    }
}