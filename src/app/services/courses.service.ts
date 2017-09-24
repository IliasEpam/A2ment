import { Injectable } from '@angular/core';
import { ICourse } from '../typings/course.component.d';

@Injectable()
export class CoursesService {
public courses: Array<ICourse> = [
    {
      id: '1',
      title: 'course #1',
      duration: '165 min',
      date: '15.06.2017',
      description: 'kokoko ko ko koko koko ko ko k kok ok ok'
    },
    {
      id: '2',
      title: 'course #2',
      duration: '95 min',
      date: '19.06.2017',
      description: 'be bebeb ebebe be  be bebebe be be'
    }
  ];

    getCourses(): Array<ICourse> {
        return this.courses;
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