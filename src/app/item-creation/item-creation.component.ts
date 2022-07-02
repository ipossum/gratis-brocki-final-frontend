import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemControllerService, ItemCreationDto} from "../openapi-gen";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-creation',
  templateUrl: './item-creation.component.html',
  styleUrls: ['./item-creation.component.scss']
})
export class ItemCreationComponent implements OnInit {

  constructor(private itemService: ItemControllerService, private router: Router) {}

  ngOnInit(): void {}

  model: ItemCreationDto = {};
  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {



      this.itemService.createNewItem(this.model).subscribe(response => {
        console.log("Form Submitted!");
        this.router.navigate(['item/update/' + response.id]);
      })
    }
  }
}
