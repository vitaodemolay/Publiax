import { http } from 'exredux';
import { IUserAddress } from '../Interfaces/IUserAddress';

const baseUrl = process.env.BASE_API_URL;
const routeGetAddressData = 'api/UserData/getUserAddresses/';
const routeIncludeAddressData = 'api/UserData/addUserAddress/';
const routeUpdateAddressData = 'api/UserData/updateUserAddress/';

export class AddressDataRepository {
    static getAddressData(token: string) {
        const config = {
            headers: { 'Authorization': "bearer " + token }
        };
        return http.get<IUserAddress[]>(`${baseUrl}${routeGetAddressData}`, config);
    }

    static updateAddressData(token: string, data: IUserAddress) {
        const config = {
            headers: { 'Authorization': "bearer " + token }
        };
        if (data.addressId !== '') {
            return http.put(`${baseUrl}${routeUpdateAddressData}${data.addressId}`, data, config);
        }

        return http.post(`${baseUrl}${routeIncludeAddressData}`, data, config);
    }
}