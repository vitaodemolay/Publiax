import { Model, Action, Inject, BaseHttpModel } from 'exredux';
import { INotification } from "../Service/Interfaces/INotification";
import { AuthModel } from './AuthModel';
import { NotificationRespository } from '../Service/Repository/NotificationRepository';
import { ISendNotification } from '../Service/Interfaces/ISendNotification';



@Model
export class NotificationModel extends BaseHttpModel<INotification> {
    input: ISendNotification = {
        recipient: "Sistema",
        body: "",
        subject: ""
    }

    notifications: INotification[] = null;

    showNotificationSendForm = false;

    errorMessage = "";

    showErrorMessage = false;

    @Inject auth?: AuthModel;

    @Action
    doFieldUpdate(fieldName: string, value: string) {
        this.input[fieldName] = value;
    }


    @Action
    openSendNotificationForm() {
        this.showNotificationSendForm = true;
    }

    @Action
    closeSendNotificationForm() {
        this.clearSendNotificationForm();
        this.showNotificationSendForm = false;
    }

    @Action
    sendNotification() {
        NotificationRespository.sendNotification(this.auth.getSavedToken(), this.input)
            .then(f => {
                this.closeSendNotificationForm();
            }).catch(e => {
                this.errorMessage = "Falha no envio da Mensagem. Tente Novamente!"
                this.showErrorMessage = true;
            }).finally(() => {
                this.completed(null);
            });
    }

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
    changeStatusNotification(notificationId: string, status: number) {
        let _promise = null;
        if (status == 0) {
            _promise = NotificationRespository.notificationUnreadedSet(this.auth.getSavedToken(), notificationId);
        }
        if (status == 1) {
            _promise = NotificationRespository.notificationReadedSet(this.auth.getSavedToken(), notificationId);
        }
        if (status == 3) {
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

        if (this.notifications != null) {
            return this.notifications.filter(x => x.status == 0).length;
        }

        return 0;
    }

    public hasUnreadedNotification = (): boolean => {

        return this.getCountUnreadedNotification() > 0;

    }

    private clearSendNotificationForm() {
        this.input = {
            recipient: "Sistema",
            body: "",
            subject: ""
        }

        this.errorMessage = "";
        this.showErrorMessage = false;
    }
}