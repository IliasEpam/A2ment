import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ment',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { 
  constructor(private authService: AuthService) {

  }

  isAuthVisible(): boolean {
    return this.authService.isVisible();
  }
}
