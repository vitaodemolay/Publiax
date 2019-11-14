import { http } from 'exredux';


export class AuthRepository {

    static logoutOnServer(url: string) {
        http.get(url).then(_ => { });

    }
}