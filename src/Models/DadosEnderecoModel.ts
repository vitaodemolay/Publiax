import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { IUserAddress } from '../Service/Interfaces/IUserAddress';
import { AuthModel } from './AuthModel';
import { AddressDataRepository } from '../Service/Repository/AddressDataRepository';

@Model
export class DadosEnderecoModel extends BaseHttpModel<IUserAddress> {
    input: IUserAddress = 
    {
        addressId: "",
        addressTitle: "Principal",
        city: "",
        complement: "",
        neighborhood: "",
        number: "",
        street: "",
        state: "",
        zipCode: "",
    };

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

    @Inject auth?: AuthModel;

    @Action
    doFieldUpdate(fieldName: string, value: string) {
        this.input[fieldName] = value;
    }

    @Action
    getAddressDataOnSource() {
        AddressDataRepository.getAddressData(this.auth.getSavedToken())
        .then(f => {
            this.input = f.data[0];
        }).catch(e => {
            
        }).finally(() => {
            this.completed(null);
        });
    }

    @Action
    updateDataSource() { 
        this.setSaving(true);
        this.setError(false);
        AddressDataRepository.updateAddressData(this.auth.getSavedToken(), this.input)
        .catch(e => {
            this.setError(true, e.message)
        }).finally(() =>{
            this.setSaving(false);
            this.completed(null);
        });
    }
}