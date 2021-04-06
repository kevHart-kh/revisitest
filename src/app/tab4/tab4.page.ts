import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  url : string
  name : string

  constructor(
    public photoService:PhotoService
  ) { 
    this.url = photoService.fotoActiveUrl
    this.name = photoService.fotoActiveName
  }

  ngOnInit() {
  }

}
