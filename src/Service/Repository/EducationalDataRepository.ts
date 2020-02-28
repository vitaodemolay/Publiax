import { http } from 'exredux';
import { IEducational } from "../Interfaces/IEducational";

const baseUrl = process.env.BASE_API_URL;
const routeGetEducationalsData = 'api/UserResume/getEducationals/';
const routeAddEducationalData = 'api/UserResume/registerEducational/';
const routeUpdateEducationalData = 'api/UserResume/updateEducational/';
const routeDeleteEducationalData = 'api/UserResume/deleteEducational/';

export class EducationalDataRepository {
    static getEducationalsData(token: string) {
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.get<IEducational[]>(`${baseUrl}${routeGetEducationalsData}`, config);
    }

    static addNewEducationalData(token: string, educational: IEducational){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.post(`${baseUrl}${routeAddEducationalData}`, educational, config);
    }

    static updateEducationalData(token: string, educational: IEducational){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.put(`${baseUrl}${routeUpdateEducationalData}${educational.educationalId}`, educational, config);
    }

    static deleteEducationalData(token: string, educationalId: string){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.delete(`${baseUrl}${routeDeleteEducationalData}${educationalId}`, config);
    }
}