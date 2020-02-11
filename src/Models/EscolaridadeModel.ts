import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { IEducational } from "../Service/Interfaces/IEducational";
import { AuthModel } from './AuthModel';
import { EducationalDataRepository } from '../Service/Repository/EducationalDataRepository'

@Model
export class EscolaridadeModel extends BaseHttpModel<IEducational> {
    input: IEducational = {
        educationalId: "",
        title: "",
        institution: "",
        degree: 1,
        completed: false,
        year: null
    }

    private educationals: IEducational[] = null;
    private _editing: boolean = false;

    private _saving: boolean = false;
    private _error: boolean = false;
    private _errorMessage: string = "";

    private _educationalToDelete: IEducational = null;
    private _deleting: boolean = false;

    public getHistoryEducational = (): IEducational[] => {
        return this.educationals;
    }

    public getEducationalToDelete = (): IEducational => {
        return this._educationalToDelete;
    }

    public isSaving = (): boolean => {
        return this._saving;
    }

    public isError = (): boolean => {
        return this._error;
    }

    public isEditing = (): boolean => {
        return this._editing;
    }

    public isDeleting = (): boolean => {
        return this._deleting;
    }

    private setEditing(value: boolean) {
        this._editing = value;
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

    private clearInput() {
        this.input = {
            educationalId: "",
            title: "",
            institution: "",
            degree: 1,
            completed: false,
            year: null
        };

        this._error = false;
        this._errorMessage = "";
    }

    private prepareInputToEdit(educational: IEducational) {
        this.input = educational;
    }

    @Inject auth?: AuthModel;

    @Action
    doFieldUpdate(fieldName: string, value: any) {
        this.input[fieldName] = value;
    }

    @Action
    getEducationalsDataOnSource() {
        EducationalDataRepository.getEducationalsData(this.auth.getSavedToken())
            .then(f => {
                this.educationals = f.data;
            }).catch(e => {

            }).finally(() => {
                this.completed(null);
            });
    }

    @Action
    updateDataSource() {
        this.setSaving(!this.isSaving());
        this.setError(false);

        let _promise = null;

        if (this.input.educationalId !== "") {
            _promise = EducationalDataRepository.updateEducationalData(this.auth.getSavedToken(), this.input)
        }
        else {
            _promise = EducationalDataRepository.addNewEducationalData(this.auth.getSavedToken(), this.input)
        }

        _promise.then(f => {
            this.getEducationalsDataOnSource();
            this.cancelEdition()
        }).catch(e => {
            this.setError(true, e.message)
            this.completed(null);
        }).finally(() => {
            this.setSaving(false);
        });
    }

    @Action
    deleteSetedEducational() {
        if (this._educationalToDelete != null) {
            const educationalId = this._educationalToDelete.educationalId;
            EducationalDataRepository.deleteEducationalData(this.auth.getSavedToken(), educationalId)
                .then(f => {
                    this.getEducationalsDataOnSource();
                    if(this.educationals.some(f => f.educationalId === educationalId)){
                        const idx = this.educationals.findIndex(f => f.educationalId === educationalId);
                        delete this.educationals[idx];
                    }
                }).catch(e => {
                    this.completed(null);
                }).finally(() => {
                    this.setEducationalToDelete("");
                })
        }
    }

    @Action
    preperNewEducational() {
        this.clearInput();
        this.setEditing(true);
    }

    @Action
    editExistsEducational(educationalId: string) {
        this.clearInput();
        this.prepareInputToEdit(this.educationals.find(f => f.educationalId == educationalId));
        this.setEditing(true);
    }

    @Action
    cancelEdition() {
        this.clearInput();
        this.setEditing(false);
    }

    @Action
    setEducationalToDelete(educationalId: string) {
        let educational = null;
        if (educationalId != "") {
            educational = this.educationals.find(f => f.educationalId == educationalId);
        }
        this._educationalToDelete = educational;
        this._deleting = this._educationalToDelete != null;
    }
}