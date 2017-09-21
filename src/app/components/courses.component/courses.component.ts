import { Component } from '@angular/core';

@Component({
  selector: 'ment-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent { 
  public courses: Array<any> = [
    {
      id: 1,
      title: 'course #1',
      duration: '165 min',
      date: '15.06.2017',
      description: 'kokoko ko ko koko koko ko ko k kok ok ok'
    },
    {
      id: 2,
      title: 'course #2',
      duration: '95 min',
      date: '19.06.2017',
      description: 'be bebeb ebebe be  be bebebe be be'
    }
  ]

  onDeleteCourse(id: string): void {
    console.log(id);
  }
}
