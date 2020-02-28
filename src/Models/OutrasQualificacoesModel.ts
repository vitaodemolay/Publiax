import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { AuthModel } from './AuthModel';
import { ISkill } from '../Service/Interfaces/ISkill';
import { SkillRepository } from '../Service/Repository/SkillRepository';

@Model
export class OutrasQualificacoesModel extends BaseHttpModel<ISkill> {
    input: ISkill = {
        skillId: "",
        description: "",
        level: 1
    }

    private hardskills: ISkill[] = null;
    private _editing: boolean = false;

    private _saving: boolean = false;
    private _error: boolean = false;
    private _errorMessage: string = "";

    private _hardskillToDelete: ISkill = null;
    private _deleting: boolean = false;

    public getHistoryHardSkill = (): ISkill[] => {
        return this.hardskills;
    }

    public getHardSkillToDelete = (): ISkill => {
        return this._hardskillToDelete;
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

    private prepareInputToEdit(hardSkill: ISkill) {
        this.input = hardSkill;
    }

    @Inject auth?: AuthModel;

    @Action
    doFieldUpdate(fieldName: string, value: any) {
        this.input[fieldName] = value;
    }

    @Action
    getHardSkillsDataOnSource() {
        SkillRepository.getSkillData(this.auth.getSavedToken(), false)
            .then(f => {
                this.hardskills = f.data;
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
            _promise = SkillRepository.updateSkillData(this.auth.getSavedToken(), this.input, false)
        }
        else {
            _promise = SkillRepository.AddNewSkillData(this.auth.getSavedToken(), this.input, false)
        }

        _promise.then(f => {
            this.getHardSkillsDataOnSource();
            this.cancelEdition()
        }).catch(e => {
            this.setError(true, e.message)
            this.completed(null);
        }).finally(() => {
            this.setSaving(false);
        });
    }

    @Action
    deleteSetedHardSkill() {
        if (this._hardskillToDelete != null) {
            const skillId = this._hardskillToDelete.skillId;
            SkillRepository.deleteSkillData(this.auth.getSavedToken(), skillId, false)
                .then(f => {
                    this.getHardSkillsDataOnSource();
                    if(this.hardskills.some(f => f.skillId === skillId)){
                        const idx = this.hardskills.findIndex(f => f.skillId === skillId);
                        delete this.hardskills[idx];
                    }
                }).catch(e => {
                    this.completed(null);
                }).finally(() => {
                    this.setHardSkillToDelete("");
                })
        }
    }

    @Action
    preperNewHardSkill() {
        this.clearInput();
        this.setEditing(true);
    }

    @Action
    editExistsHardSkill(skillId: string) {
        this.clearInput();
        this.prepareInputToEdit(this.hardskills.find(f => f.skillId == skillId));
        this.setEditing(true);
    }

    @Action
    setHardSkillToDelete(skillId: string) {
        let hardSkill = null;
        if (skillId != "") {
            hardSkill = this.hardskills.find(f => f.skillId == skillId);
        }
        this._hardskillToDelete = hardSkill;
        this._deleting = this._hardskillToDelete != null;
    }
}