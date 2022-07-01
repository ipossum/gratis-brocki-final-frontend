import {Component, OnInit, ViewChild} from '@angular/core';
import {UserControllerService} from "../openapi-gen";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private userService: UserControllerService) {}

  ngOnInit(): void {}

  //model: UserLoginDto = {};
  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {
      // TODO: remove 'response'e?
      /*this.userService.loginUser(this.model).subscribe(response => {
        console.log("Form Submitted!");
      })
      */

      this.form.reset();
    }
  }
}
