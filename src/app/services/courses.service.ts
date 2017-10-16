import { Injectable } from '@angular/core';
import { ICourse } from '../typings/course.component.d';
import { Observable, Observer } from 'rxjs';
import { SpinnerService } from './spinner.service';
import { Http, Response, Request, RequestOptions, Headers, RequestMethod, URLSearchParams} from '@angular/http';

@Injectable()
export class CoursesService {
  private baseUrl: string = "http://localhost:3000";
  private coursesPage: number = 1; 

  constructor(private spinnerService: SpinnerService, private http: Http){}

    getCourses(update?: boolean): Observable<ICourse[]> {
        let url = this.baseUrl + '/courses?page=' + this.coursesPage;
        if (update) {
            url+='&update=1';
        }
        return this.http.get(url).map((res) => res.json());
    }

    getMoreCourses(): Observable<ICourse[]> {
        ++this.coursesPage;
        let url = this.baseUrl + '/courses?page=' + this.coursesPage;
        return this.http.get(url).map((res) => res.json());
    }

    deleteCourse(id: string): Observable<any> {
        let url = this.baseUrl + '/courses?courseId=' + id;
        return this.http.delete(url);
    }

    /*createCourse(data: ICourse): void {
        this.courses.push(data);
    }*/

    /*updateCourse(data: ICourse): void {
        this.courses[this.findCouseIndexById(data.id)] = data;
    }*/

    /*deleteCourse(courseId: string): void {
        let courseIndex = this.findCouseIndexById(courseId);
        this.courses.splice(courseIndex, 1);
    }*/

    /*getCourseById(courseId: string): ICourse {
        return this.courses[this.findCouseIndexById(courseId)];
    }

    findCouseIndexById(id: string): number {
        for (let i = 0; i < this.courses.length; i++) {
            if (this.courses[i].id === id) {
                return i;
            }
        }
    }*/
}