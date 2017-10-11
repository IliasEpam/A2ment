import { Injectable } from '@angular/core';
import { ICourse } from '../typings/course.component.d';
import { Observable, Observer } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
export class CoursesService {
public courses: Array<ICourse> = [
    {
      id: '1',
      title: 'course #1',
      duration: '165',
      date: '09.29.2017',
      description: 'kokoko ko ko koko koko ko ko k kok ok ok',
      isFavorite: false
    },
    {
      id: '2',
      title: 'course #2',
      duration: '120',
      date: '10.19.2017',
      description: 'be bebeb ebebe be  be bebebe be be',
      isFavorite: true
    },
    {
      id: '3',
      title: 'course #3',
      duration: '50',
      date: '07.19.2017',
      description: 'be bebeb ebebe be  be bebebe be be',
      isFavorite: false
    }
  ];

  constructor(private spinnerService: SpinnerService){}

    getCourses(): Observable<ICourse[]> {
        return Observable.create((observer: Observer<any>) => {
            observer.next(this.courses);
            })
        .delay(2000);
    }

    getCourseById(courseId: string): ICourse {
        return this.courses[this.findCouseIndexById(courseId)];
    }

    createCourse(data: ICourse): void {
        this.courses.push(data);
    }

    updateCourse(data: ICourse): void {
        this.courses[this.findCouseIndexById(data.id)] = data;
    }

    deleteCourse(courseId: string): void {
        let courseIndex = this.findCouseIndexById(courseId);
        this.courses.splice(courseIndex, 1);
    }

    findCouseIndexById(id: string): number {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].id === id) {
                return i;
            }
        }
    }
}