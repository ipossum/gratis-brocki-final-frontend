import {Component, OnInit, ViewChild} from '@angular/core';
import {Signup} from '../openapi-gen/model/signup';
import {UserControllerService} from "../openapi-gen/api/userController.service";
import {UserCreationDto} from "../openapi-gen/model/userCreationDto";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserControllerService) { }
  ngOnInit(): void {
  }
  //model: Signup = new Signup();
  model: UserCreationDto = {};
  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {
      this.model.username = this.form.username;
      this.model.email = this.form.email;
      this.model.password = this.form.password;
      this.model.phoneNumber = this.form.phoneNumber;

      this.userService.registerNewUser(this.model).subscribe(response => {
        console.log("Form Submitted!");
      })
      this.form.reset();
    }
  }
}

