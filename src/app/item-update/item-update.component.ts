import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemControllerService, ItemUpdateDto} from "../openapi-gen";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.scss']
})
export class ItemUpdateComponent implements OnInit {

  constructor(private itemService: ItemControllerService, private activatedRoute: ActivatedRoute, private router: Router) {}

  model: ItemUpdateDto = {};
  @ViewChild('f') form: any;
  itemId: any;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(p => {
      this.itemId = p['id'];
      this.itemService.getItem(p['id']).subscribe( response => {
          this.model = response;
      });
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // TODO: remove 'response'?
      this.itemService.updateItem(this.itemId, this.model).subscribe(response => {
        console.log("Form Submitted!");
      })
      this.form.reset();
      this.router.navigate(['/home']);
    }
  }
}
