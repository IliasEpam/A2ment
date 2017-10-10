import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ment-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  public authForm: Subscription;
  public isAuthVisible: boolean;
  public isLoggedInS: Subscription;
  public isLoggedIn: boolean;

  constructor(private authService: AuthService, private ref: ChangeDetectorRef) {
    this.authForm = authService.authFormStream$.subscribe(
      isAuthVisible => {
        this.isAuthVisible = isAuthVisible;
        this.ref.markForCheck();
      });
    
    this.isLoggedInS = authService.isAuthStream$.subscribe(
      isLoggedIn => {
        this.isLoggedIn = isLoggedIn;
        this.ref.markForCheck();
      });
  }

  ngOnInit() {
    //this.authService.isUserAuthInitial();
  }

  toggleAuth(): void{
    this.authService.toggleAuthForm();
  }

  ngOnDestroy() {
    this.authForm.unsubscribe();
    this.isLoggedInS.unsubscribe();
  }
}
