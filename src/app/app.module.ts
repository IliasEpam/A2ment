import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './common/header.component';
import { LogoComponent } from './common/logo.component';
import { BreadcrumbsComponent } from './common/breadcrumbs.component';
import { LoginComponent } from './common/login.component';
import { LoginPageComponent } from './common/loginpage.component';
import { FooterComponent } from './common/footer.component';
import { CoursesComponent } from './components/courses.component';
import { CourseComponent } from './components/course.component';
import { ToolboxComponent } from './components/toolbox.component';
import { SpinnerComponent } from './common/spinner.component';
import { AddCourseComponent } from './components/addcourse.component';
import { CoursesService } from './services/courses.service';
import { AuthService } from './services/auth.service';
import { SpinnerService } from './services/spinner.service';
import { HttpService } from './services/http.service';

import { BorderDirective } from './directives/border.directive';
import { FormatTimePipe } from './pipes/time.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { SearchPipe } from './pipes/search.pipe';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CoursesService,
    AuthService,
    SearchPipe,
    SpinnerService,
    HttpService
  ],
  declarations: [
    AppComponent,
    BorderDirective,
    FormatTimePipe,
    OrderByPipe,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoginComponent,
    FooterComponent,
    CoursesComponent,
    CourseComponent,
    LoginPageComponent,
    ToolboxComponent,
    SpinnerComponent,
    AddCourseComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
