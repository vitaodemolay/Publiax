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

    @Inject auth?: AuthModel;


    @Action
    doFieldUpdate(fieldName: string, value: string) {
        this.input[fieldName] = value;
    }

    @Action
    getUserDataOnSource() {
            PersonalDataRepository.getUserData(this.auth.getSavedToken()).then(f => {
                this.input = f.data;
                this.completed(f);
            });
    }

    @Action
    updateDataSource() {
        PersonalDataRepository.updateUserData(this.auth.getSavedToken(), this.input);
    }
}