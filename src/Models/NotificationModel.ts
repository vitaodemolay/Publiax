import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { INotification } from "../Service/Interfaces/INotification";
import { AuthModel } from './AuthModel';
import { NotificationRespository } from '../Service/Repository/NotificationRepository';


@Model
export class NotificationModel extends BaseHttpModel<INotification> {

    notifications: INotification[] = null;

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

    @Action 
    changeStatusNotification(notificationId: string, status: number){
        let _promise = null;
        if(status == 0){
            _promise = NotificationRespository.notificationUnreadedSet(this.auth.getSavedToken(), notificationId);
        }
        if(status == 1){
            _promise = NotificationRespository.notificationReadedSet(this.auth.getSavedToken(), notificationId);
        }
        if(status == 3){
            _promise = NotificationRespository.notificationDelete(this.auth.getSavedToken(), notificationId);
        }

        _promise.then(f => {
            this.getNotificationOnSource();
        }).catch(e => {
                
        }).finally(() => {
            this.completed(null);
        });
    }

    public getCountUnreadedNotification = (): number => {
        
        if(this.notifications != null){
            return this.notifications.filter(x => x.status == 0).length;
        }

        return 0;
    }

    public hasUnreadedNotification = (): boolean => {

        return this.getCountUnreadedNotification() > 0;
    
    }
}