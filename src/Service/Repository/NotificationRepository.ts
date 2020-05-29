import { http } from 'exredux';
import { INotification } from '../Interfaces/INotification';
import { ISendNotification } from '../Interfaces/ISendNotification';
import {httpPatch, httpDelete} from '../../Helpers/request'

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
        return http.post(urlPostNotification(), request, config);
    }

    static notificationReadedSet(token: string, notificationId: string){
        const config = {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': "bearer " + token 
            }
        };
        return httpPatch(urlPatchReadedSetNotification(notificationId), config);
    }

    static notificationUnreadedSet(token: string, notificationId: string){
        const config = {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': "bearer " + token 
            }
        };
        return httpPatch(urlPatchUnreadedSetNotification(notificationId), config);
    }

    static notificationDelete(token: string, notificationId: string){
        const config = {
            headers: {
                'Content-Type': 'application/json', 
                'Authorization': "bearer " + token 
            }
        };
        return httpDelete(urlDeleteNotification(notificationId), config);
    }
}