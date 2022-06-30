import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemControllerService, ItemCreationDto} from "../openapi-gen";

@Component({
  selector: 'app-item-creation',
  templateUrl: './item-creation.component.html',
  styleUrls: ['./item-creation.component.scss']
})
export class ItemCreationComponent implements OnInit {

  constructor(private itemService: ItemControllerService) {}

  ngOnInit(): void {}

  model: ItemCreationDto = {};
  @ViewChild('f') form: any;

  onSubmit() {
    if (this.form.valid) {
      // TODO: remove 'response'?
      this.itemService.createNewItem(this.model).subscribe(response => {
        console.log("Form Submitted!");
      })

      this.form.reset();
    }
  }
}
