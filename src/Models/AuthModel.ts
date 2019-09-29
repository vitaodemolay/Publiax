import { http, Model, Action } from 'exredux';

const baseUrl = process.env.BASE_API_URL;
const servicetokenroute = 'account/AuthGetToken?returnUrl=';

@Model
export class AuthModel {
    ENDPOINT_INTERNAL_CALLBACK: string = '';
    ENDPOINT_GET_TOKEN_SERVICE: string = '';
    TOKEN_STORE_KEY_NAME: string = '';

    @Action
    public init(internalBaseUrl: string) {
        if (this.ENDPOINT_INTERNAL_CALLBACK === '') this.ENDPOINT_INTERNAL_CALLBACK = `${internalBaseUrl}/%23/token/`;
        if (this.ENDPOINT_GET_TOKEN_SERVICE === '') this.ENDPOINT_GET_TOKEN_SERVICE = `${baseUrl}${servicetokenroute}${this.ENDPOINT_INTERNAL_CALLBACK}`;
        if (this.TOKEN_STORE_KEY_NAME === '' ) this.TOKEN_STORE_KEY_NAME = `${internalBaseUrl}/token`;
    }

    @Action
    public saveToken(token: string){
        localStorage.setItem(this.TOKEN_STORE_KEY_NAME, token);
    }

    @Action
    public purgeSavedToken(){
        localStorage.removeItem(this.TOKEN_STORE_KEY_NAME);
    }

    public getEndpointToGetToken = ()=> this.ENDPOINT_GET_TOKEN_SERVICE;
        
    public getSavedToken = ()=> localStorage.getItem(this.TOKEN_STORE_KEY_NAME);
} 