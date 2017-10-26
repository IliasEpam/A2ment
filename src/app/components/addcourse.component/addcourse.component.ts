import { Component, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { durationValidator } from '../duration.component';
import { dateInputValidator } from '../dateinput.component';
import { authorsInputValidator } from '../authorsinput.component';
import { CoursesService } from '../../services/courses.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ment-addcourse',
  templateUrl: './addcourse.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./addcourse.component.scss']
})

export class AddCourseComponent implements OnInit {    
  courseForm: FormGroup;
  duration: string = 'duration';
  date: string = 'date';
  authorsName: string = 'authors';
  authors: [string];
  constructor(private formBuilder: FormBuilder, private coursesService: CoursesService) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', dateInputValidator()],
      duration: ['', durationValidator()],
      authors: ['', authorsInputValidator()]
    });
    let sub = this.coursesService.getAuthors().subscribe((authors:[string]) => {
        this.authors = authors;
      },
      ()=>{},
      ()=>{sub.unsubscribe()}
    );
  }

  onsubmit(form: any) {
    console.log(form.value);
  }

  log(){
    console.log(this.courseForm.controls.title.errors);
  }
}
