import {Component, OnInit, ViewChild} from '@angular/core';
import {UserControllerService, UserUpdateDto} from "../openapi-gen";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-signup-update',
  templateUrl: './signup-update.component.html',
  styleUrls: ['./signup-update.component.scss']
})
export class SignupUpdateComponent implements OnInit {

  constructor(private userService: UserControllerService, private router: Router, private activatedRoute: ActivatedRoute){}

  model: UserUpdateDto = {};
  @ViewChild('f') form: any;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(p => {
      this.userService.getUser(p['id']).subscribe( response => {
        this.model = response;
      })
    });
  }

  onSubmit(){
    if (this.form.valid) {
      this.activatedRoute.params.subscribe(p => {
        this.userService.updateUser(p['id'], this.model).subscribe(response => {
          alert("Update successful!");
        })
      });
    }
  }
}

