
import { http } from 'exredux';
import { IPositionHeld } from '../Interfaces/IPositionHeld';

const baseUrl = process.env.BASE_API_URL;
const routeGetPositionsData = 'api/UserResume/getPositionHelds/';
const routeAddPositionData = 'api/UserResume/registerPositionHeld/';
const routeUpdatePositionData = 'api/UserResume/updatePositionHeld/';
const routeDeletePositionData = 'api/UserResume/deletePositionHeld/{positionHeldId}';


export class PositionHeldRepository {
    static getPositionsData(token: string) {
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.get<IPositionHeld[]>(`${baseUrl}${routeGetPositionsData}`, config);
    }

    static addNewPositionData(token: string, position: IPositionHeld){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.post(`${baseUrl}${routeAddPositionData}`, position, config);
    }

    static updatePositionData(token: string, position: IPositionHeld){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.put(`${baseUrl}${routeUpdatePositionData}${position.positionHeldId}`, position, config);
    }

    static deletePositionData(token: string, positionHeldId: string){
        const config = {
            headers: {'Authorization': "bearer " + token}
        };
        return http.delete(`${baseUrl}${routeUpdatePositionData}${positionHeldId}`, config);
    }
}