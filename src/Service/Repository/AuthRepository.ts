import { http } from 'exredux';


export class AuthRepository {

    static logoutOnServer(url: string) {
        http.post(url).then(_ => { });

    }
}