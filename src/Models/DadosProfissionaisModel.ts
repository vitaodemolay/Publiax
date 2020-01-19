import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { AuthModel } from './AuthModel';
import { IPositionHeld } from '../Service/Interfaces/IPositionHeld';

@Model
export class DadosProfissionaisModel extends BaseHttpModel<IPositionHeld> {
    input: IPositionHeld = {
        positionHeldId: "",
        title: "",
        summary: "",
        actual: false,
        startIn: new Date(),
        endIn: null,
    }

    private positions: IPositionHeld[] = null;
    private _editing: boolean = false; 

    private _saving: boolean = false;
    private _error: boolean = false;
    private _errorMessage: string = "";


    public getHistoryPosition = () : IPositionHeld[] => {
        return this.positions;
    }
    
    public isSaving = () : boolean => {
        return this._saving;
    }

    public isError = () : boolean => {
        return this._error;
    }

    public isEditing = (): boolean => {
        return this._editing;
    }

    private setEditing(value: boolean){
        this._editing = value;
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

    private clearInput(){
        this.input = {
            positionHeldId: "",
            title: "",
            summary: "",
            actual: false,
            startIn: new Date(),
            endIn: null,
        };
    }

    private prepareInputToEdit(position: IPositionHeld){
        this.input = position;
    }

    @Inject auth?: AuthModel;

    @Action
    doFieldUpdate(fieldName: string, value: string) {
        this.input[fieldName] = value;
    }

    @Action
    getPositionsDataOnSource() {
        this.completed(null);
    }

    @Action
    updateDataSource() { 
        this.setSaving(!this.isSaving());
        this.setError(false);
    }

    @Action
    preperNewPosition() {
        this.clearInput();
        this.setEditing(true);
    }

    @Action
    editExistsPosition(positionId: string){
        this.clearInput();
        this.prepareInputToEdit(this.positions.find(f=> f.positionHeldId == positionId));
        this.setEditing(true);
    }

    @Action
    cancelEdition(){
        this.clearInput();
        this.setEditing(false);
    }
}