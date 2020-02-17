import { Model, BaseHttpModel, Action, Inject } from 'exredux';
import { VagasRepository } from '../Service/Repository/VagasRepository';
import { IVaga } from '../Service/Interfaces/IVaga';
import { AuthModel } from './AuthModel';
import { IJobSubscription } from '../Service/Interfaces/IJobSubscription';


@Model
export class VagaDetalheModel extends BaseHttpModel<IVaga>{
    private JOB_ID: string = '';

    @Inject auth?: AuthModel;

    private _saving: boolean = false;
    private _error: boolean = false;
    private _errorMessage: string = "";

    public isSaving = () : boolean => {
        return this._saving;
    }

    public isError = () : boolean => {
        return this._error;
    }

    private setSaving(value: boolean){
        this._saving = value;
    }

    public getErrorMessage = () : string => { 
        return this._errorMessage;
    }

    private setError(error: boolean, message?: string){
        this._error = error;
        this._errorMessage = "";
        if(error){
            this._errorMessage = message;
        }
    }


    @Action
    public setJobId(id: string) {
        if (id !== undefined && id !== '') {
            this.JOB_ID = id;
        }
    }

    @Action
    public getJobId(): string {
        return this.JOB_ID;
    }

    @Action
    public get() {
        this.request(VagasRepository.getVagaDetalhe(this.JOB_ID));
    }

    @Action
    public registerSubscription(jobId: string){
        this.setSaving(true);
        this.setError(false);
        VagasRepository.postRegistraInscricao(this.auth.getSavedToken(), jobId)
        .catch(e => {
            this.setError(true, e.message)
        }).finally(() =>{
            this.setSaving(false);
            this.completed(null);
        });
    }

    public isSubscript(jobId: string): IJobSubscription{
        let result: IJobSubscription = {
            isSubscribe: false,
        }
        this.setSaving(true);
        this.setError(false);

        VagasRepository.getInscricaoVaga(this.auth.getSavedToken(), jobId)
        .then(f => {
            result = f.data;
            result.isSubscribe = true;
        })
        .catch(e => {
            this.setError(true, e.message)
        }).finally(() =>{
            this.setSaving(false);
            this.completed(null);
        });

        return result;
    }
}