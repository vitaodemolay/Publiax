import { Model, BaseHttpModel, Action, Inject } from 'exredux';
import { VagasRepository } from '../Service/Repository/VagasRepository';
import { IVaga } from '../Service/Interfaces/IVaga';


@Model
export class VagaDetalheModel extends BaseHttpModel<IVaga>{
    private JOB_ID: string = '';
    
    public getJobId(): string {
        return this.JOB_ID;
    }
    
    @Action
    public setJobId(id: string) {
        if (id !== undefined && id !== '') {
            this.JOB_ID = id;
        }
    }
    
    @Action
    public get() {
        this.request(VagasRepository.getVagaDetalhe(this.JOB_ID));
    }
}