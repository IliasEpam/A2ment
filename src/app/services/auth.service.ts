import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { SpinnerService } from './spinner.service';

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

    constructor(private spinnerService: SpinnerService) {

    }

    toggleAuthForm(): void {
        this.isAuthFormVisible = !this.isAuthFormVisible;
        this.authFormStream.next(this.isAuthFormVisible);
    }

    isUserAuthInitial(): void {
        this.isUserAuth = !!JSON.parse(localStorage.getItem(this.storageKey));
        this.isAuthStream.next(this.isUserAuth);
    }

    login(data: any): void {
        localStorage.setItem(this.storageKey, JSON.stringify(data));
        this.isUserAuth = true;
        this.spinnerService.showSpinner();
        setTimeout(() => {
            this.isAuthStream.next(this.isUserAuth);
            this.userInfoStream.next(data.login);
            this.toggleAuthForm();
            this.spinnerService.hideSpinner();
        }, 2000);
    }

    logout(): void {
        localStorage.removeItem(this.storageKey);
        this.isUserAuth = false;
        this.isAuthStream.next(this.isUserAuth);
        this.userInfoStream.next(null);
    }

    getUserInfo(): void {
        if (this.isUserAuth) {
            let userInfo: any = JSON.parse(localStorage.getItem(this.storageKey));
            console.log(userInfo);
            this.userInfoStream.next(userInfo.login);
        } else {
            this.userInfoStream.next(null);
        }
    }
}