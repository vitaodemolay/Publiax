import { Model, Action } from 'exredux';
import { AuthRepository } from '../Service/Repository/AuthRepository';


const baseUrl = process.env.BASE_API_URL;
const servicetokenroute = 'account/AuthGetToken?returnUrl=';
const logoutRoute = 'api/auth/logoff';
const cookieLoginName = '.ASPXAUTH';

@Model
export class AuthModel {
    private ENDPOINT_INTERNAL_CALLBACK: string = '';
    private ENDPOINT_GET_TOKEN_SERVICE: string = '';
    private ENDPOINT_LOGOUT_ON_SERVER: string = '';
    private TOKEN_STORE_KEY_NAME: string = '';
    private authenticated: boolean = false;

    @Action
    public init(internalBaseUrl: string) {
        if (this.ENDPOINT_INTERNAL_CALLBACK === '') this.ENDPOINT_INTERNAL_CALLBACK = `${internalBaseUrl}/%23/token/`;
        if (this.ENDPOINT_GET_TOKEN_SERVICE === '') this.ENDPOINT_GET_TOKEN_SERVICE = `${baseUrl}${servicetokenroute}${this.ENDPOINT_INTERNAL_CALLBACK}`;
        if (this.ENDPOINT_LOGOUT_ON_SERVER === '') this.ENDPOINT_LOGOUT_ON_SERVER = `${baseUrl}${logoutRoute}`;
        if (this.TOKEN_STORE_KEY_NAME === '' ) this.TOKEN_STORE_KEY_NAME = `${internalBaseUrl}/token`;
    }

    @Action
    public saveToken(token: string){
        localStorage.setItem(this.TOKEN_STORE_KEY_NAME, token);
        this.authenticated = true;
    }

    @Action
    public purgeSavedToken(){
        localStorage.removeItem(this.TOKEN_STORE_KEY_NAME);
        AuthRepository.logoutOnServer(this.ENDPOINT_LOGOUT_ON_SERVER);
        document.cookie = `${cookieLoginName}=; Max-Age=0; path=/; domain=${location.hostname}`;
        this.authenticated = false;
    }

    public getEndpointToGetToken = ()=> this.ENDPOINT_GET_TOKEN_SERVICE;
        
    public getSavedToken = ()=> localStorage.getItem(this.TOKEN_STORE_KEY_NAME);

    public isAuthenticated = ()=> this.authenticated;
} 