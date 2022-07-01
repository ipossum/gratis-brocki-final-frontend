import {Component, OnInit, ViewChild} from '@angular/core';
import {UserControllerService} from "../openapi-gen/api/userController.service";
import {UserCreationDto} from "../openapi-gen/model/userCreationDto";
import { Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserControllerService, private router: Router) { }
  ngOnInit(): void {
  }
  model: UserCreationDto = {};

  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {
      this.userService.registerNewUser(this.model).subscribe(response => {
        this.router.navigate(['signup/update/' + response.id]);
      })
    }
  }
}

