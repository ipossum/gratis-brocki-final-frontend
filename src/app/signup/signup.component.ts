import {Component, OnInit, ViewChild} from '@angular/core';
import {Signup} from '../openapi-gen/model/signup';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  model: Signup = new Signup();
  @ViewChild('f') form: any;
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
    }
  }
}

