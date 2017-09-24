import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ment-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public username: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
     this.username = this.authService.getUserInfo().login;
  }

  logof():void {
    this.authService.logout();
  }
 }
