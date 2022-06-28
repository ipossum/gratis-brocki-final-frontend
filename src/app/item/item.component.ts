import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemDto } from "../openapi-gen/model/itemDto";
import { ItemControllerService } from "../openapi-gen/api/itemController.service";
import {ItemUpdateDto} from "../openapi-gen/model/itemUpdateDto";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: ItemDto = {};
  uItem: ItemUpdateDto = {};
  edit = true;
  add = false;

  constructor(private route: ActivatedRoute, private itemService: ItemControllerService) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const itemIdFromRoute = Number(routeParams.get('itemId'));
    this.getItem(itemIdFromRoute);
  }

  private getItem(id: number) {
    this.itemService.getItem(id).subscribe((response: ItemDto) => {
      this.item = response;
    });
  }
}

  /*
  addItem() {
    const data = {
      title: this.item.title,
      id: this.item.id,
      description: this.item.description,
      picture: this.item.pictures,
      category: this.item.category,
      condition: this.item.condition,
      messages: this.item.messages,
      owner: this.item.userId,
      postalCode: this.item.zipCode
    };
    this.itemService.createNewItem(data).subscribe(response => {
      console.log(response)
      this.itemService.getAllItems();
    });
  }

  setItemEdit(item: ItemDto) {
    this.uItem.title = item.title;
    //this.uItem.id = item.id;
    this.uItem.description = item.description;
    this.uItem.pictures = item.pictures;
    this.uItem.category = item.category;
    this.uItem.condition = item.condition;
    //this.uItem.messages = item.messages;
    //this.uItem.userId = item.userId;
    this.uItem.zipCode = item.zipCode;

    this.edit = false;
    this.add = true;
  }

  resetValues() {
    this.item.title = "";
    this.item.id = undefined;
    this.item.description = '';
    this.item.pictures = undefined;
    this.item.category = undefined;
    this.item.condition = undefined;
    this.item.messages = undefined;
    this.item.userId = undefined;
    this.item.zipCode = undefined;

    this.edit = true;
    this.add = false;
  }

  removeItem(item: ItemDto) {
    const id = item.id;
    console.log(item)
    this.itemService.deleteItem(id,undefined,undefined,undefined).subscribe(item => console.log(item));
    this.itemService.getAllItems();
  }

  updateItem(){
    this.itemService.updateItem(0, this.uItem, undefined).subscribe(response => console.log(response));
    this.itemService.getAllItems()
    this.resetValues()
  }
}
*/


