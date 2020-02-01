import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { AuthModel } from './AuthModel';
import { IPositionHeld } from '../Service/Interfaces/IPositionHeld';
import { PositionHeldRepository } from '../Service/Repository/PositionHeldRepository';

@Model
export class DadosProfissionaisModel extends BaseHttpModel<IPositionHeld> {
    input: IPositionHeld = {
        positionHeldId: "",
        title: "",
        summary: "",
        actual: false,
        startIn: null,
        endIn: null,
    }

    private positions: IPositionHeld[] = null;
    private _editing: boolean = false;

    private _saving: boolean = false;
    private _error: boolean = false;
    private _errorMessage: string = "";

    private _positionToDelete: IPositionHeld = null;
    private _deleting: boolean = false;


    public getHistoryPosition = (): IPositionHeld[] => {
        return this.positions;
    }

    public getPositionToDelete = (): IPositionHeld => {
        return this._positionToDelete;
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
            positionHeldId: "",
            title: "",
            summary: "",
            actual: false,
            startIn: null,
            endIn: null,
        };

        this._error = false;
        this._errorMessage = "";
    }

    private prepareInputToEdit(position: IPositionHeld) {
        this.input = position;
    }

    @Inject auth?: AuthModel;

    @Action
    doFieldUpdate(fieldName: string, value: any) {
        this.input[fieldName] = value;
    }

    @Action
    getPositionsDataOnSource() {
        PositionHeldRepository.getPositionsData(this.auth.getSavedToken())
            .then(f => {
                this.positions = f.data;
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

        if (this.input.positionHeldId !== "") {
            _promise = PositionHeldRepository.updatePositionData(this.auth.getSavedToken(), this.input)
        }
        else {
            _promise = PositionHeldRepository.addNewPositionData(this.auth.getSavedToken(), this.input)
        }

        _promise.then(f => {
            this.getPositionsDataOnSource();
            this.cancelEdition()
        }).catch(e => {
            this.setError(true, e.message)
            this.completed(null);
        }).finally(() => {
            this.setSaving(false);
        });
    }

    @Action
    deleteSetedPosition() {
        if (this._positionToDelete != null) {
            PositionHeldRepository.deletePositionData(this.auth.getSavedToken(), this._positionToDelete.positionHeldId)
                .then(f => {
                    this.getPositionsDataOnSource();
                }).catch(e => {
                    this.completed(null);
                }).finally(() => {
                    this.setPositionToDelete("");
                })
        }
    }

    @Action
    preperNewPosition() {
        this.clearInput();
        this.setEditing(true);
    }

    @Action
    editExistsPosition(positionId: string) {
        this.clearInput();
        this.prepareInputToEdit(this.positions.find(f => f.positionHeldId == positionId));
        this.setEditing(true);
    }

    @Action
    cancelEdition() {
        this.clearInput();
        this.setEditing(false);
    }

    @Action
    setPositionToDelete(positionId: string) {
        let position = null;
        if (positionId != "") {
            position = this.positions.find(f => f.positionHeldId == positionId);
        }
        this._positionToDelete = position;
        this._deleting = this._positionToDelete != null;
    }
}