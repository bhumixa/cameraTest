import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-cam-component',
  templateUrl: './cam-component.component.html',
  styleUrls: ['./cam-component.component.scss'],
})
export class CamComponentComponent implements OnInit {

  constructor(private camera: Camera) { }
  image:any='/assets/shapes.svg';

  ngOnInit() {}

  openCam(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    // this.camera.getPicture(options).then((imageData) => {
    //  // imageData is either a base64 encoded string or a file URI
    //  // If it's base64 (DATA_URL):
    //  //alert(imageData)
    //  this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
    // }, (err) => {
    //  // Handle error
    //  alert("error "+JSON.stringify(err))
    // });

    this.camera.getPicture(options).then(
      imageData => {
        let imageString = "data:image/jpeg;base64," + imageData;
        this.image=(<any>window).Ionic.WebView.convertFileSrc(imageData);
        this.uploadImage(imageString);
      },
      err => {
        console.log(err);
        alert(err);
      }
    );
  }

  uploadImage(imageString) {
    alert(imageString)
  }

}
