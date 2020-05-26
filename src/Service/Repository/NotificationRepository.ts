import { http } from 'exredux';
import { INotification } from '../Interfaces/INotification';
import { ISendNotification } from '../Interfaces/ISendNotification';

const baseUrl = process.env.BASE_API_URL;
const baseRoute = 'api/notification/'

function urlGetNotification(){
    return `${baseUrl}${baseRoute}`;
}

function urlPostNotification(){
    return `${baseUrl}${baseRoute}`;
}

function urlPatchReadedSetNotification(notificationId){
    return `${baseUrl}${baseRoute}${notificationId}/readed-set`;
}

function urlPatchUnreadedSetNotification(notificationId){
    return `${baseUrl}${baseRoute}${notificationId}/unreaded-set`;
}

function urlDeleteNotification(notificationId){
    return `${baseUrl}${baseRoute}${notificationId}`;
}

export class NotificationRespository {
    static getNotification(token: string) {
        const config = {
            headers: { 'Authorization': "bearer " + token }
        };
        return http.get<INotification[]>(urlGetNotification(), config);
    }

    static sendNotification(token: string, request: ISendNotification){
        const config = {
            headers: { 'Authorization': "bearer " + token }
        };
        return http.post(urlPostNotification(), request);
    }

    static notificationReadedSet(token: string, notificationId: string){
        const config = {
            headers: { 'Authorization': "bearer " + token }
        };
        return http.patch(urlPatchReadedSetNotification(notificationId));
    }

    static notificationUnreadedSet(token: string, notificationId: string){
        const config = {
            headers: { 'Authorization': "bearer " + token }
        };
        return http.patch(urlPatchUnreadedSetNotification(notificationId));
    }

    static notificationDelete(token: string, notificationId: string){
        const config = {
            headers: { 'Authorization': "bearer " + token }
        };
        return http.delete(urlDeleteNotification(notificationId));
    }
}