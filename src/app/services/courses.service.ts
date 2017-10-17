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

    getCourses(update?: boolean, searchParam?: string): Observable<ICourse[]> {
        let url = this.baseUrl + '/courses?page=' + this.coursesPage;
        if (update) {
            url+='&update=1';
        }
        if (searchParam) {
            url+='&search=' + searchParam;
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

    searchCourses(param: string) {
        let url = this.baseUrl + '/courses?searchParam=' + param;
        return this.http.get(url)
            .map((res)=>{
                if (res) {
                    return res.json();
                }
            });
    }

    /*createCourse(data: ICourse): void {
        this.courses.push(data);
    }*/

    /*updateCourse(data: ICourse): void {
        this.courses[this.findCouseIndexById(data.id)] = data;
    }*/
}