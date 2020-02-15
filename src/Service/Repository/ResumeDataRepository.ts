import { http } from 'exredux';
import { IResume } from '../Interfaces/IResume';

const baseUrl = process.env.BASE_API_URL;
const routeGetPresentationLetter = 'api/UserResume/getPresentationLetter/';
const routeUpdatePresentationLetter = 'api/UserResume/registerPresentationLetter/';
const routeDeletePresentationLetter = 'api/UserResume/deletePresentationLetter/';

export class ResumeDataRepository {

    static getPresentationLetter(token: string) {
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.get<IResume>(`${baseUrl}${routeGetPresentationLetter}`, config);
    }

    static updatePresentationLetter(token: string, data: IResume){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };

        return http.post(`${baseUrl}${routeUpdatePresentationLetter}`, data, config);
    }

    static deletePresentationLetter(token: string){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };

        return http.delete(`${baseUrl}${routeDeletePresentationLetter}`, config)
    }
}