import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
  // @ts-ignore
  selectedFile: File;
  retrievedImage: any;
  base64Data: any;
  retrievedResponse: any;
  message: string | undefined;
  // @ts-ignore
  imageId: number;

  constructor(private httpClient: HttpClient) {}

  //Gets called when the user selects an image
  public onFileChanged(event) {
    //Select File
    this.selectedFile = event.target.files[0];
  }

  //Gets called when the user clicks on submit to upload the image
  onUpload() {
    console.log(this.selectedFile);

    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    // @ts-ignore
    uploadImageData.append('file', this.selectedFile, this.selectedFile.name);

    //Make a call to the Spring Boot Application to save the image
    this.httpClient.post('http://localhost:8080/api/v1/files', uploadImageData, {observe: 'response'})
      .subscribe((response) => {
          if (response.status === 200) {
            this.message = 'Image upload successful';
          } else {
            this.message = 'Image upload failed';
          }
        }
      );
  }

  //Gets called when the user clicks on retrieve image button to get the image from back end
  getImage() {
    //Make a call to Spring Boot to get the Image Bytes.
    this.httpClient.get('http://localhost:8080/api/v1/files/' + this.imageId)
      .subscribe(
        response => {
          this.retrievedResponse = response;
          this.base64Data = this.retrievedResponse.data;
          this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
        }
      );
  }

  ngOnInit(): void {
  }

}

