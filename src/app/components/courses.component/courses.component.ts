import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { ICourse } from '../../typings/course.component.d';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ment-courses',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  public allCoursesSub: Subscription;
  public courses: ICourse[];
  public allCourses: Observable<ICourse[]>;
  public allCourses$: ICourse[];
  public sortConfig: string = 'az';
  public sortOptions: any[] = [
    {name: 'Sort by date ↑', value: 'az'},
    {name: 'Sort by date ↓', value: 'za'}
  ];
  @Input() searchParam: string;
  constructor(private coursesService: CoursesService, private searchPipe: SearchPipe, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.allCourses = this.coursesService.getCourses();
    let sub = this.allCourses.subscribe(
      (data) => {
        this.allCourses$ = data;
        this.courses = this.searchPipe.transform(this.allCourses$, this.searchParam);
        this.ref.markForCheck();
      }
    );
    
  }

  ngOnChanges() {
    console.log('changed');
    this.courses = this.searchPipe.transform(this.allCourses$, this.searchParam);
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
