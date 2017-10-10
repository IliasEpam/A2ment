import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'ment',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public searchParam: string;
  public isAuthVisible: boolean;
  public authForm: Subscription;
  constructor(private authService: AuthService,  private ref: ChangeDetectorRef) {
    this.authForm = authService.authFormStream$.subscribe(
      isAuthVisible => {
        this.isAuthVisible = isAuthVisible;
        this.ref.markForCheck();
      });
  }

  onSearch(param: string): void {
    this.searchParam = param;
  }

  ngOnDestroy() {
    this.authForm.unsubscribe();
  }
}
