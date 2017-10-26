import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';

export function authorsInputValidator() {
    return (control: FormControl) => {
      let err = {
        error: {
          invalid: true
        }
      };
      let isValid;
      let regexp = /\d{2}[.]\d{2}[.]\d{4}$/;
      if (!control.value.length) {
        isValid = false;
      } else {
        isValid = true;
      }
    return isValid ? null: err;
    }
  }

@Component({
  selector: 'ment-form-authorsinput',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './authorsinput.component.html',
  styleUrls: ['./authorsinput.component.scss'],
  providers: [
    { 
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => AuthorsInputComponent),
        multi: true
    },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => AuthorsInputComponent), multi: true }
  ],
  host: {
    class: 'authors-input'
  }
})

export class AuthorsInputComponent implements ControlValueAccessor {
  @Input('nameOption') inputName: string;
  @Input() authors: [string];

  propagateChange = (_: any) => {};
  validateFn:any = () => {};
  
  currentValue: any = [];

  ngOnChanges(inputs: any) {
    this.validateFn = authorsInputValidator();
    this.propagateChange(this.currentValue);
  }

  onChange(event:any) {
    this.writeValue(event);
    this.propagateChange(this.currentValue);
  }

  writeValue(event: any) {
    if (event.target) {
      if (event.target.checked) {
        this.currentValue.push(event.target.value);
      } else {
        this.deleteValue(event.target.value);
      }
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  deleteValue(value: string){
    this.currentValue.splice(this.findIndexByValue(value), 1);
  }

  findIndexByValue(value: string): number {
    let index: number;
    for (let i = 0; i < this.currentValue; i++) {
      if(this.currentValue[i] === value) {
        index = i;
      }
    }
    return index;
  }
}
