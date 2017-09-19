import { Component, Input } from '@angular/core';
import { ICourse } from './course.component.d';

@Component({
  selector: 'ment-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})

export class CourseComponent {
  @Input() courseItem: ICourse;
  contructor () {

  }
}
