import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any = UntypedFormGroup; //FormGroup;
  submitted = false;
  constructor( private formBuilder: UntypedFormBuilder){} //FormBuilder){}
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    if(this.submitted) {
      alert("Great!!");
    }
  }
  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
}
