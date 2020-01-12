import { http } from 'exredux';
import { IUserData} from '../Interfaces/IUserData';

const baseUrl = process.env.BASE_API_URL;
const routeGetPersonalData = 'api/UserData/getUserData/';
const routeUpdatePersonalData = 'api/UserData/updateUserData/';

export class PersonalDataRepository {
    static getUserData(token: string) {
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.get<IUserData>(`${baseUrl}${routeGetPersonalData}`, config);
    }

    static updateUserData(token: string, data: IUserData){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };

        http.put(`${baseUrl}${routeUpdatePersonalData}`, data, config);
    }
}