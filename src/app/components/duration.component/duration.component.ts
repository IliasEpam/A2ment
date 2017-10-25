import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, FormControl, NG_VALIDATORS } from '@angular/forms';

export function durationValidator() {
    return (control: FormControl) => {
      let err = {
        error: {
          invalid: true
        }
      };
      let isValid;
      if (isNaN(+control.value) || !control.value) {
        isValid = false;
      } else {
          isValid = true;
      }
    return isValid ? null: err;
    }
  }

@Component({
  selector: 'ment-form-duration',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.scss'],
  providers: [
    { 
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DurationComponent),
        multi: true
    },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DurationComponent), multi: true }
  ]
})

export class DurationComponent implements ControlValueAccessor {
  @Input('nameOption') inputName: string;

  propagateChange = (_: any) => {};
  validateFn:any = () => {};
  
  currentValue: any;

  ngOnChanges(inputs: any) {
    this.validateFn = durationValidator();
    this.propagateChange(this.currentValue);
  }

  onChange(event:any) {
    this.propagateChange(event.target.value);
  }

  writeValue(value: any) {
    if (value) {
      this.currentValue = value;
    }
  }

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched() {}

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}
