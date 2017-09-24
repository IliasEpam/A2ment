import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    private storageKey: string = 'ment';
    public isAuthVisible: boolean = false;

    toggleAuthForm(): void {
        this.isAuthVisible = !this.isAuthVisible;
    }

    isVisible(): boolean {
        return this.isAuthVisible;
    }

    login(data: any): void {
        data.token = 'someToken';
        localStorage.setItem(this.storageKey, JSON.stringify(data));
    }

    logout(): void {
        localStorage.removeItem(this.storageKey);
    }

    isAuth(): boolean {
        return !!localStorage.getItem(this.storageKey);
    }

    getUserInfo(): any{
        if (this.isAuth()){
            return JSON.parse(localStorage.getItem(this.storageKey));
        }
    }
}