import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { INotification } from "../Service/Interfaces/INotification";
import { AuthModel } from './AuthModel';
import { NotificationRespository } from '../Service/Repository/NotificationRepository';


@Model
export class NotificationModel extends BaseHttpModel<INotification> {

    notifications = null;

    @Inject auth?: AuthModel;

    @Action
    getNotificationOnSource() {
        NotificationRespository.getNotification(this.auth.getSavedToken())
            .then(f => {
                this.notifications = f.data;
            }).catch(e => {
                
            }).finally(() => {
                this.completed(null);
            });
    }
}