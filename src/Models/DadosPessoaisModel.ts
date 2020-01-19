import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { AuthModel } from './AuthModel';
import { PersonalDataRepository } from '../Service/Repository/PersonalDataRepository';
import { IUserData } from '../Service/Interfaces/IUserData';

@Model
export class DadosPessoaisModel extends BaseHttpModel<IUserData> {
    input: IUserData =
        {
            login: "",
            name: "",
            email: "",
            celphone: "",
            cgc: "",
            rg: "",
            issuer: "",
            birthday: new Date(),
            gender: 0,
            maritalStatus: 0,
            physicalDisability: 0,
            disabilityAdditionalDescription: ""
        };


    private _saving: boolean = false;
    private _error: boolean = false;
    private _errorMessage: string = "";

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

    @Inject auth?: AuthModel;


    @Action
    doFieldUpdate(fieldName: string, value: string) {
        this.input[fieldName] = value;
    }

    @Action
    getUserDataOnSource() {
        PersonalDataRepository.getUserData(this.auth.getSavedToken()).then(f => {
            this.input = f.data;
        }).catch(e => {
            
        }).finally(() => {
            this.completed(null);
        });
    }

    @Action
    updateDataSource() {
        this.setSaving(true);
        this.setError(false);
        PersonalDataRepository.updateUserData(this.auth.getSavedToken(), this.input)
        .catch(e => {
            this.setError(true, e.message)
        }).finally(() =>{
            this.setSaving(false);
            this.completed(null);
        });
    }
}