import {Component, OnInit, ViewChild} from '@angular/core';
import {ItemControllerService, ItemCreationDto} from "../openapi-gen";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-item-creation',
  templateUrl: './item-creation.component.html',
  styleUrls: ['./item-creation.component.scss']
})
export class ItemCreationComponent implements OnInit {

  selectedFile: File;

  constructor(private itemService: ItemControllerService,
              private router: Router,
              private httpClient: HttpClient) {}

  ngOnInit(): void {}

  model: ItemCreationDto = {};
  @ViewChild('f') form: any;

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    // Upload image first --> TODO: combine these two posts
    // FormData API provides methods to easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);
    this.httpClient
      .post('http://localhost:8080/api/v1/files', uploadImageData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            console.log('Image upload successful');
          } else {
            console.log('Image upload failed');
          }
        }
      );

    // Upload item second
    if (this.form.valid) {
      this.itemService.createNewItem(this.model).subscribe(response => {
        console.log("Form Submitted!");
        this.router.navigate(['item/update/' + response.id]);
      })
    }
  }
}
