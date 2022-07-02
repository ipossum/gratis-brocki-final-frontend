import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ItemDto, ItemControllerService, ItemUpdateDto, UserControllerService, UserDto} from "../openapi-gen";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: ItemDto = {};
  user: UserDto = {};
  edit = true;
  add = false;

  constructor(private router: Router, private route: ActivatedRoute, private itemService: ItemControllerService, private userService: UserControllerService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.itemService.getItem(p['id']).subscribe( response => {
        this.item = response;
      });
    });
  }

  private getItem(id: number) {
    this.itemService.getItem(id).subscribe((response: ItemDto) => {
      this.item = response;
    });
  }

  getPlaceholder() {
    return "./assets/placeholder.png";
  }

  getUsername(userId: any) {
    this.userService.getUser(userId).subscribe((response: UserDto) => {
      this.user = response;
    });
    if (this.user.username == undefined){
      return "unknown";
    }
    return this.user.username;
  }

  getPhoneNumber(userId: any) {
    this.userService.getUser(userId).subscribe((response: UserDto) => {
      this.user = response;
    });

    if (this.user.phoneNumber == undefined){
      return "unknown";
    }
    return this.user.phoneNumber;
  }

  updateItem(){
    this.router.navigate(['item/update/' + this.route.snapshot.paramMap.get('id')]);
  }
}
