import { Component, OnInit } from '@angular/core';
import { ItemDto } from "./openapi-gen/model/itemDto";
import { ItemControllerService } from "./openapi-gen/api/itemController.service";
import {MessageDto, PictureDto} from "./openapi-gen";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items:ItemDto[] = [];

  constructor(private itemService: ItemControllerService) {}

  ngOnInit(): void {
    this.getItems()
  }

  private getItems() {
    this.itemService.getItems1().subscribe(items => this.items = items);
  }
}
