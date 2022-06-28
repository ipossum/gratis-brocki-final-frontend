import { Component, OnInit } from '@angular/core';
//import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { UntypedFormBuilder, UntypedFormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  updateItemForm:any = UntypedFormGroup; //FormGroup;
  submitted = false;
  constructor( private formBuilder: UntypedFormBuilder){} //FormBuilder){}
  get f() { return this.updateItemForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.updateItemForm.invalid) {
      return;
    }
    if(this.submitted) {
      alert("Great!!");
    }
  }
  ngOnInit() {

    this.updateItemForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      zipCode: ['', [Validators.required]],
      condition: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }
}
