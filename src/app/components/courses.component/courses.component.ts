import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { SearchPipe } from '../../pipes/search.pipe';
import { ICourse } from '../../typings/course.component.d';
import { Observable, Subscription } from 'rxjs';
import { SpinnerService } from '../../services/spinner.service';

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
  constructor(
    private coursesService: CoursesService, 
    private searchPipe: SearchPipe, 
    private ref: ChangeDetectorRef,
    private spinnerService: SpinnerService) { }

  ngOnInit() {
    this.updateCourses();
  };

  updateCourses(update?: boolean, searchParam?: string) {
    this.spinnerService.showSpinner();
    if (update) {
      if (searchParam) {
        this.allCourses = this.coursesService.getCourses(update, searchParam);
      } else {
      this.allCourses = this.coursesService.getCourses(update);
      }
    } else {
      this.allCourses = this.coursesService.getCourses();
    }
    let sub = this.allCourses.subscribe(
      (data) => {
        this.courses = data;
        /*this.allCourses$ = data;
        this.courses = this.searchPipe.transform(this.allCourses$, this.searchParam);*/
        this.ref.markForCheck();
        this.spinnerService.hideSpinner();
      }
    );
  }

  ngOnChanges() {
    //this.courses = this.searchPipe.transform(this.allCourses$, this.searchParam);
    this.updateCourses(true, this.searchParam);
  }

  onDeleteCourse(id: string): void {
    let confirmation = confirm('Do you really want to delete this course?');
    if (confirmation) {
      let sub = this.coursesService.deleteCourse(id).
      subscribe(() => {
        this.updateCourses(true);
      });
    }
  }

  getMoreCourses(): void {
    this.spinnerService.showSpinner();
    this.coursesService.getMoreCourses()
    .subscribe((res)=>{
      this.courses = this.courses.concat(res);
      //this.allCourses$ = this.allCourses$.concat(res);
      //this.courses = this.searchPipe.transform(this.allCourses$, this.searchParam);
      this.ref.markForCheck();
      this.spinnerService.hideSpinner();
    });
  }

  isNoCourses(): boolean {
    return !this.courses || !this.courses.length;
  }

  public onSortingOption(e: any): void{
    this.sortConfig = e.target.value;
  }
}
