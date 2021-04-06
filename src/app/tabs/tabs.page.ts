import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public photoService: PhotoService,
  ) {}

  clearFoto(){
    this.photoService.fotoActiveUrl = ""
    this.photoService.fotoActiveName = "Tidak ada foto yang dilihat"
  }

}
