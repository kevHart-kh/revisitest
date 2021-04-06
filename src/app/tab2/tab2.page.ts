import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    public photoService:PhotoService,
    private afStorage: AngularFireStorage) {}

  async ngOnInit(){
    await this.photoService.loadFoto();
  }

  tambahFoto (){
    this.photoService.tambahFoto();
  }

  urlImageStorage: string[] = [];

  async ionViewDidEnter() {
    await this.photoService.loadFoto();
  }


  hapusFoto() {
    var refImage = this.afStorage.storage.ref('imgStorage');
    refImage.listAll().then((res) => {
      res.items.forEach((itemRef) => {
        itemRef.delete().then(() => {
          alert("Hapus data berhasil")
        });
      });
    });
  }

  uploadFoto() {
    // console.log(this.photoService.dataFoto[index].filePath);
    // return;

    this.urlImageStorage = [];
    for (var index in this.photoService.dataFoto) {
      const imgFilepath = `imgStorage/${this.photoService.dataFoto[index].filePath}`;

      this.afStorage.upload(imgFilepath, this.photoService.dataFoto[index].dataImage).then(() => {
        this.afStorage.storage.ref().child(imgFilepath).getDownloadURL().then((url) => {
          this.urlImageStorage.unshift(url)
          alert("Upload data berhasil")
        });
      });
    }
  }
  

}
