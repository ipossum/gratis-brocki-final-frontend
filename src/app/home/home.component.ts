import { Component, OnInit } from '@angular/core';
import {ItemControllerService, ItemDto} from "../openapi-gen";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: ItemDto[] = [];

  constructor(private itemService: ItemControllerService) {
  }

  ngOnInit(): void {
    this.getItems()
  }

  private getItems() {
    this.itemService.getAllItems().subscribe(items => this.items = items);
  }
}
