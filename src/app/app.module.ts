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
import { ToolboxComponent } from './components/toolbox.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    LoginComponent,
    FooterComponent,
    CoursesComponent,
    CourseComponent,
    ToolboxComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
