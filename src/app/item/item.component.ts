import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ItemDto, ItemControllerService, ItemUpdateDto, UserControllerService, UserDto} from "../openapi-gen";
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
        this.getUsername(this.item.userId);
      });
    });
    this.getImage(2);
    }

  private getItem(id: number) {
    this.itemService.getItem(id).subscribe((response: ItemDto) => {
      this.item = response;
    });
  }

  getImage(imageId: number) {
      this.httpClient.get('http://localhost:8080/api/v1/files/' + imageId)
        .subscribe(
          response => {
            this.retrievedResponse = response;
            this.base64Data = this.retrievedResponse.data;
            this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
          }
        );
      return this.retrievedImage;
  }

  getPlaceholder() {
    return "./assets/placeholder.png";
  }

  getUsername(userId: any) {
    this.userService.getUser(userId).subscribe((response: UserDto) => {
      this.user = response;
    });
    if (this.user.username == undefined) {
      return "unknown";
    }
    return this.user.username;
  }

  getPhoneNumber(userId: any) {
    this.userService.getUser(userId).subscribe((response: UserDto) => {
      this.user = response;
    });

    if (this.user.phoneNumber == undefined) {
      return "unknown";
    }
    return this.user.phoneNumber;
  }

  updateItem() {
    this.router.navigate(['item/update/' + this.route.snapshot.paramMap.get('id')]);
  }
}
