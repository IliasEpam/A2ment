import { Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ment-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public usernameS: Subscription;
  public username: string;

  constructor(private authService: AuthService, private ref: ChangeDetectorRef) {
    this.usernameS = authService.userInfoStream$.subscribe(
      username => {
        this.username = username;
        this.ref.markForCheck();
      });
  }
  ngOnInit() {
    this.authService.getUserInfo();
  }

  logof(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    this.usernameS.unsubscribe();
  }
 }
