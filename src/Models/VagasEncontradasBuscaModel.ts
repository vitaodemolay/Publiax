import { Model, Action, BaseHttpModel } from 'exredux';
import { VagasRepository } from '../Service/Repository/VagasRepository';


@Model
export class VagasEncontradasBuscaModel extends BaseHttpModel<any>{
    _isResultVisible : boolean = false;
    _filterIsNotEmpty : boolean = false;
    
    public isResultVisible = () : boolean => {
        return this._isResultVisible;
    }

    @Action
    public setFilterIsNotEmpty(value: boolean){
        this._filterIsNotEmpty = value;
    }
    
    @Action
    public setResultIsVisible(value : boolean){
        this._isResultVisible = value && this._filterIsNotEmpty;
    }

    @Action
    public getBuscarVagas(filtro : string){
        this.request(VagasRepository.getBuscarVagas(filtro));
    }
}