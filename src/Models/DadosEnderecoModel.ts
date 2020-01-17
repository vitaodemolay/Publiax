import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { IUserData } from '../Service/Interfaces/IUserData';
import { IUserAddress } from '../Service/Interfaces/IUserAddress';
import { AuthModel } from './AuthModel';

@Model
export class DadosEnderecoModel extends BaseHttpModel<IUserData> {
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
        zipCode: ""
    };

    @Inject auth?: AuthModel;


    @Action
    doFieldUpdate(fieldName: string, value: string) {
        this.input[fieldName] = value;
    }

    @Action
    getAddressDataOnSource() {
        this.completed(null);
    }

    @Action
    updateDataSource() { 

    }
}