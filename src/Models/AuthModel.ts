import { http, Model, Action } from 'exredux';

const baseUrl = process.env.BASE_API_URL;
const servicetokenroute = 'account/AuthGetToken?returnUrl=';

@Model
export class AuthModel {
    ENDPOINT_INTERNAL_CALLBACK: string = '';
    ENDPOINT_GET_TOKEN_SERVICE: string = '';

    @Action
    public init(internalBaseUrl: string) {
        if (this.ENDPOINT_INTERNAL_CALLBACK === '') this.ENDPOINT_INTERNAL_CALLBACK = `${internalBaseUrl}/token/`;
        if (this.ENDPOINT_GET_TOKEN_SERVICE === '') this.ENDPOINT_GET_TOKEN_SERVICE = `${baseUrl}${servicetokenroute}${this.ENDPOINT_INTERNAL_CALLBACK}`;
    }

    public getEndpointToGetToken = ()=> this.ENDPOINT_GET_TOKEN_SERVICE;
        
} 