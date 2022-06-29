import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemControllerService, ItemUpdateDto} from "../openapi-gen";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

  constructor(private itemService: ItemControllerService) {}

  ngOnInit(): void {}

  model: ItemUpdateDto = {};
  @ViewChild('f') form: any;

  itemId: any;

  onSubmit() {
    if (this.form.valid) {
      // TODO: remove 'response'?
      this.itemService.updateItem(this.itemId, this.model).subscribe(response => {
        console.log("Form Submitted!");
      })

      this.form.reset();
    }
  }
}
