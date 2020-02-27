import { Model, BaseHttpModel, Action, Inject } from 'exredux';
import { IJobSubscription } from "../Service/Interfaces/IJobSubscription";
import { AuthModel } from './AuthModel';
import { VagaDetalheModel } from './VagaDetalheModel';
import { VagasRepository } from '../Service/Repository/VagasRepository';

@Model
export class InscricaoVagaModel extends BaseHttpModel<IJobSubscription>{
    private jobSubscription: IJobSubscription = null;

    @Inject auth?: AuthModel;
    @Inject vagaDetalhe?: VagaDetalheModel;

    private _saving: boolean = false;
    private _error: boolean = false;
    private _errorMessage: string = "";

    private JobId = (): string => {
        const _jobId = this.vagaDetalhe.getJobId();
        return _jobId;
    } 
    
    public getJobSubscription = (): IJobSubscription => {
        return this.jobSubscription;
    }

    public isSaving = (): boolean => {
        return this._saving;
    }

    public isError = (): boolean => {
        return this._error;
    }

    private setSaving(value: boolean) {
        this._saving = value;
    }

    public getErrorMessage = (): string => {
        return this._errorMessage;
    }

    private setError(error: boolean, message?: string) {
        this._error = error;
        this._errorMessage = "";
        if (error) {
            this._errorMessage = message;
        }
    }

    @Action
    public registerSubscription() {
        this.setSaving(true);
        this.setError(false);
        VagasRepository.postRegistraInscricao(this.auth.getSavedToken(), this.JobId())
            .catch(e => {
                this.setError(true, e.message)
            }).finally(() => {
                this.setSaving(false);
                this.completed(null);
            });
    }

    @Action
    public requestJobSubscription() {
        let result: IJobSubscription = {
            isSubscribe: false,
        }
        this.setSaving(true);
        this.setError(false);

        VagasRepository.getInscricaoVaga(this.auth.getSavedToken(), this.JobId())
            .then(f => {
                if (f.data !== null && f.data !== undefined) {
                    result = f.data;
                    result.isSubscribe = true;
                }
            })
            .catch(e => {
                if(e.response.status != 404){
                    this.setError(true, e.message)
                }
            }).finally(() => {
                this.jobSubscription = result;
                this.setSaving(false);
                this.completed(null);
            });
    }
}