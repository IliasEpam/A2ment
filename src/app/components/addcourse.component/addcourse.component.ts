import { Component, Output, OnInit, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from "@angular/forms";
import { durationValidator } from '../duration.component';

@Component({
  selector: 'ment-addcourse',
  templateUrl: './addcourse.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./addcourse.component.scss']
})

export class AddCourseComponent implements OnInit {    
  courseForm: FormGroup;
  duration: string = 'duration';  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.courseForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(500)]],
      date: ['', [Validators.required]],
      duration: ['', durationValidator()],
      authors: ['', [Validators.required]]
    })
  }

  onsubmit(form: any) {
    console.log(form.value);
  }
}
