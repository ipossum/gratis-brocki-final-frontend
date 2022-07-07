import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemControllerService, ItemDto, UserControllerService, UserDto} from "../openapi-gen";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: ItemDto = {};
  user: UserDto = {};

  retrievedImage: any;
  base64Data: any;
  retrievedResponse: any;

  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemControllerService, private userService: UserControllerService, private httpClient: HttpClient) {
    this.retrievedImage = "./assets/placeholder.png"
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.itemService.getItem(p['id']).subscribe(response => {
        this.item = response;
        this.getUser(this.item.userId);
        this.getImage(this.item.pictures.pop().id);
      });
    });
    }

/*
    private getItem(id: number) {
    this.itemService.getItem(id).subscribe((response: ItemDto) => {
      this.item = response;
    });
  }
*/

  getImage(imageId: number) {
      this.httpClient.get('http://localhost:8080/api/v1/files/' + imageId)
        .subscribe(
          response => {
            this.retrievedResponse = response;
            this.base64Data = this.retrievedResponse.data;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );
  }

  getUser(userId: any) {
    this.userService.getUser(userId).subscribe((response: UserDto) => {
      this.user = response;
    });
  }

  updateItem() {
    this.router.navigate(['item/update/' + this.route.snapshot.paramMap.get('id')]);
  }
}
