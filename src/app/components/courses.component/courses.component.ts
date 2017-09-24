import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { ICourse } from '../../typings/course.component.d';

@Component({
  selector: 'ment-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit { 
  public courses: Array<ICourse>;

  constructor(private coursesService: CoursesService) {

  }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }

  onDeleteCourse(id: string): void {
    let confirmation = confirm('Do you really want to delete this course?');
    if (confirmation) {
      this.coursesService.deleteCourse(id);
    }
  }
}
