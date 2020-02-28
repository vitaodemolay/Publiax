import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { AuthModel } from './AuthModel';
import { IResume } from '../Service/Interfaces/IResume';
import { ResumeDataRepository } from '../Service/Repository/ResumeDataRepository';


@Model
export class VisualizaCvModel extends BaseHttpModel<IResume> {

    @Inject auth?: AuthModel;

    input: IResume = {
        presentationLetter: "",
        userData: null,
        userAddress: null,
        positions: null,
        educationals: null,
        skills: null,
        languages: null,
    }

    @Action
    getResumeFullOnSource() {
        ResumeDataRepository.getResumeFull(this.auth.getSavedToken())
            .then(f => {
                const _data: IResume = f.data;
                this.input = {
                    presentationLetter: _data.presentationLetter,
                    userData: _data.userData,
                    userAddress: _data.userAddress,
                    positions: _data.positions,
                    educationals: _data.educationals,
                    skills: _data.skills,
                    languages: _data.languages,
                }
            }).catch(e => {

            }).finally(() => {
                this.completed(null)
            })
    }
}