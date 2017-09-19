import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './common/header.component';
import { LogoComponent } from './common/logo.component';
import { BreadcrumbsComponent } from './common/breadcrumbs.component';
import { LoginComponent } from './common/login.component';
import { FooterComponent } from './common/footer.component';
import { CoursesComponent } from './components/courses.component';
import { CourseComponent } from './components/course.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoginComponent,
    FooterComponent,
    CoursesComponent,
    CourseComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
