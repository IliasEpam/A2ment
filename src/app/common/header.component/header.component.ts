import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ment-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(private authService: AuthService) {
  }

  isLoggedIn(): boolean {
    return this.authService.isAuth();
  }

  isAuthVisible(): boolean {
    return this.authService.isVisible();
  }

  toggleAuth(): void{
    this.authService.toggleAuthForm();
  }
}
