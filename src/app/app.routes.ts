import { Routes } from '@angular/router';

import { CoursesComponent } from './components/courses.component';
import { CourseComponent } from './components/course.component';
import { AddCourseComponent } from './components/addcourse.component';
import { NoContentComponent } from './components/nocontent.component';
import { LoginPageComponent } from './common/loginpage.component';

export const ROUTES: Routes = [
  {
    path: '',
    redirectTo: '/courses',
    pathMatch: 'full'
  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'addcourse',
    component: AddCourseComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'courses/:id',
    component: AddCourseComponent
  },
  {
    path: '**',
    component: NoContentComponent
  }
];
