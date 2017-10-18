import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { SpinnerService } from './spinner.service';
import { Http, Response, Request, RequestOptions, Headers, RequestMethod, URLSearchParams} from '@angular/http';

@Injectable()
export class AuthService {
    private storageKey: string = 'ment';
    public isAuthFormVisible: boolean = false;
    public authFormStream = new Subject<any>();
    public authFormStream$ = this.authFormStream.asObservable();

    public isAuthStream = new ReplaySubject<any>(1);
    public isAuthStream$ = this.isAuthStream.asObservable();

    private isUserAuth: boolean;
    public userInfoStream = new Subject<any>();
    public userInfoStream$ = this.userInfoStream.asObservable();
    private userInfo: any;
    private baseUrl = "http://localhost:3000";

    constructor(private spinnerService: SpinnerService, private http: Http) {

    }

    toggleAuthForm(): void {
        this.isAuthFormVisible = !this.isAuthFormVisible;
        this.authFormStream.next(this.isAuthFormVisible);
    }

    isUserAuthInitial(): void {
        this.isUserAuth = !!JSON.parse(localStorage.getItem(this.storageKey));
        this.isAuthStream.next(this.isUserAuth);
    }

    login(data: any): any {
        this.spinnerService.showSpinner();
        let body = {"login": data.login};
        let url: string = this.baseUrl + '/login';
        let sub = this.loginOnServer(url, body)
        .subscribe(
            (res) => {
                setTimeout(() => {
                    this.afterLogin(body);
                }, 1000);
            },
            ()=>{},
            ()=>{sub.unsubscribe()}
        );
    }

    afterLogin(body: any): void {
        this.isUserAuth = true;
        this.isAuthStream.next(this.isUserAuth);
        this.setUserInfo(body);
        this.getUserInfo()
        this.toggleAuthForm();
        this.spinnerService.hideSpinner();
    }

    loginOnServer(url: string, body: any): Observable<any> {
        return this.http.post(url, body);
    }

    logout(): void {
        this.spinnerService.showSpinner();
        let url: string = this.baseUrl + '/login';
        let sub = this.logoutOnServer(url)
        .subscribe(
            (res) => {
                setTimeout(() => {
                    this.afterLogout();
                }, 1000);
            },
            ()=>{},
            ()=>{sub.unsubscribe()}
    );
        
    }
    
    afterLogout(): void{
        this.isUserAuth = false;
        this.isAuthStream.next(this.isUserAuth);
        this.userInfoStream.next(null);
        this.spinnerService.hideSpinner();
    }

    logoutOnServer(url: string): Observable<any> {
        let body = {
            login: this.userInfo.login
        };
        return this.http.post(url, body);
    }

    setUserInfo(info: any): void {
        this.userInfo = info;
    }

    getUserInfo(): void {
        if (this.isUserAuth) {
            this.userInfoStream.next(this.userInfo.login);
        } else {
            this.userInfoStream.next(null);
        }
    }
}