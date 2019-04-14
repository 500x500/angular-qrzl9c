import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { User } from './user.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})

export class FormComponent {
  formGroup = this.fb.group({
    name: [''],
    dob: [''],
  usersArray: this.fb.array([this.fb.control('')])
});

constructor(private fb: FormBuilder) {}

get usersArray() {
  return this.formGroup.get('usersArray') as FormArray;
  }

  addUser() {
    this.studentsArray.push(this.fb.group(new User()));
  }
  onSubmit() {
    console.warn(this.formGroup.value);
  }
}


