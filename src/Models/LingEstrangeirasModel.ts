import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { AuthModel } from './AuthModel';
import { ISkill } from '../Service/Interfaces/ISkill';
import { SkillRepository } from '../Service/Repository/SkillRepository';


@Model
export class LingEstrangeirasModel extends BaseHttpModel<ISkill> {
    input: ISkill = {
        skillId: "",
        description: "",
        level: 1
    }

    private languageskills: ISkill[] = null;
    private _editing: boolean = false;

    private _saving: boolean = false;
    private _error: boolean = false;
    private _errorMessage: string = "";

    private _languageskillToDelete: ISkill = null;
    private _deleting: boolean = false;

    public getHistoryLanguageSkill = (): ISkill[] => {
        return this.languageskills;
    }

    public getLanguageSkillToDelete = (): ISkill => {
        return this._languageskillToDelete;
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
            skillId: "",
            description: "",
            level: 1
        }

        this._error = false;
        this._errorMessage = "";
    }

    private prepareInputToEdit(languageSkill: ISkill) {
        this.input = languageSkill;
    }

    @Inject auth?: AuthModel;

    @Action
    doFieldUpdate(fieldName: string, value: any) {
        this.input[fieldName] = value;
    }

    @Action
    getLanguageSkillsDataOnSource() {
        SkillRepository.getSkillData(this.auth.getSavedToken(), true)
            .then(f => {
                this.languageskills = f.data;
            }).catch(e => {

            }).finally(() => {
                this.completed(null);
            });
    }

    @Action
    cancelEdition() {
        this.clearInput();
        this.setEditing(false);
    }

    @Action
    updateDataSource() {
        this.setSaving(!this.isSaving());
        this.setError(false);

        let _promise = null;

        if (this.input.skillId !== "") {
            _promise = SkillRepository.updateSkillData(this.auth.getSavedToken(), this.input, true)
        }
        else {
            _promise = SkillRepository.AddNewSkillData(this.auth.getSavedToken(), this.input, true)
        }

        _promise.then(f => {
            this.getLanguageSkillsDataOnSource();
            this.cancelEdition()
        }).catch(e => {
            this.setError(true, e.message)
            this.completed(null);
        }).finally(() => {
            this.setSaving(false);
        });
    }

    @Action
    deleteSetedLanguageSkill() {
        if (this._languageskillToDelete != null) {
            const skillId = this._languageskillToDelete.skillId;
            SkillRepository.deleteSkillData(this.auth.getSavedToken(), skillId, true)
                .then(f => {
                    this.getLanguageSkillsDataOnSource();
                    if(this.languageskills.some(f => f.skillId === skillId)){
                        const idx = this.languageskills.findIndex(f => f.skillId === skillId);
                        delete this.languageskills[idx];
                    }
                }).catch(e => {
                    this.completed(null);
                }).finally(() => {
                    this.setLanguageSkillToDelete("");
                })
        }
    }

    @Action
    preperNewLanguageSkill() {
        this.clearInput();
        this.setEditing(true);
    }

    @Action
    editExistsLaguageSkill(skillId: string) {
        this.clearInput();
        this.prepareInputToEdit(this.languageskills.find(f => f.skillId == skillId));
        this.setEditing(true);
    }

    @Action
    setLanguageSkillToDelete(skillId: string) {
        let hardSkill = null;
        if (skillId != "") {
            hardSkill = this.languageskills.find(f => f.skillId == skillId);
        }
        this._languageskillToDelete = hardSkill;
        this._deleting = this._languageskillToDelete != null;
    }
}