import { Component, OnInit, Input } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { ICourse } from '../../typings/course.component.d';

@Component({
  selector: 'ment-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit { 
  public courses: Array<ICourse>;
  public allCourses: Array<ICourse>
  public sortConfig: string = 'az';
  public sortOptions: any[] = [
    {name: 'Sort by date ↑', value: 'az'},
    {name: 'Sort by date ↓', value: 'za'}
  ];
  @Input() searchParam: string;
  constructor(private coursesService: CoursesService, private searchPipe: SearchPipe) { }

  ngOnInit() {
    this.allCourses = this.coursesService.getCourses();
    console.log(this.searchParam);
    this.courses = this.searchPipe.transform(this.allCourses, this.searchParam);
  }

  ngOnChanges() {
    this.courses = this.searchPipe.transform(this.allCourses, this.searchParam);
  }

  onDeleteCourse(id: string): void {
    let confirmation = confirm('Do you really want to delete this course?');
    if (confirmation) {
      this.coursesService.deleteCourse(id);
    }
  }

  isNoCourses(): boolean {
    return !this.courses || !this.courses.length;
  }

  public onSortingOption(e: any): void{
    this.sortConfig = e.target.value;
  }
}
