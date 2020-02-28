import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { IResume } from '../Service/Interfaces/IResume';
import { AuthModel } from './AuthModel';
import { ResumeDataRepository } from '../Service/Repository/ResumeDataRepository';
import RichTextEditor from 'react-rte';

@Model
export class CartaApresentacaoModel extends BaseHttpModel<IResume> {
    input = {
        presentationLetter: RichTextEditor.createEmptyValue(),
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

    private mountResult(value: IResume): IResume {
        if (value !== null && value !== undefined) {
            return value
        }

        return {
            presentationLetter: "",
        };
    }

    public getPresentationLetterOnString(): string{
        const result = this.input.presentationLetter.toString('html');
        if(result == "<p><br></p>"){
            return "";
        }

        return result;
    }

    @Inject auth?: AuthModel;

    @Action
    doFieldUpdate(fieldName: string, value: string) {
        this.input[fieldName] = value;
    }

    @Action
    getPresentationLetterDataOnSource() {
        ResumeDataRepository.getPresentationLetter(this.auth.getSavedToken())
            .then(f => {
                const value = this.mountResult(f.data);
                this.input = {
                    presentationLetter: RichTextEditor.createValueFromString(value.presentationLetter, 'html'),
                };
            }).catch(e => {

            }).finally(() => {
                this.completed(null);
            });
    }

    @Action
    updateDataSource() {
        this.setSaving(true);
        this.setError(false);
        let valueToSave: IResume = {
            presentationLetter: this.input.presentationLetter.toString('html'),
        };

        if(valueToSave.presentationLetter == "<p><br></p>"){
            ResumeDataRepository.deletePresentationLetter(this.auth.getSavedToken())
            .catch(e => {
                this.setError(true, e.message)
            }).finally(() => {
                this.setSaving(false);
                this.completed(null);
            });

            return;
        }

        ResumeDataRepository.updatePresentationLetter(this.auth.getSavedToken(), valueToSave)
            .catch(e => {
                this.setError(true, e.message)
            }).finally(() => {
                this.setSaving(false);
                this.completed(null);
            });
    }
}