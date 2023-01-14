import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImageGetShibuService } from '../services/image-get-shibu.service';
import { ImageGetCatsService } from '../services/image-get-cats.service';
import { ImageGetBirdsService } from '../services/image-get-birds.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private getShibuImage: ImageGetShibuService, private getCatImage: ImageGetCatsService, private getBirdImage: ImageGetBirdsService) {}
  imageSource: string = "";

  public getShibuImageCall() {
    this.getShibuImage.getImageSource().subscribe({
      next: (response: any) => {
        this.imageSource = response;
        console.log(this.imageSource)
      }
    })
  }

  public getCatImageCall() {
    this.getCatImage.getImageSource().subscribe({
      next: (response: any) => {
        this.imageSource = response;
        console.log(this.imageSource)
      }
    })
  }

  public getBirdImageCall() {
    this.getBirdImage.getImageSource().subscribe({
      next: (response: any) => {
        this.imageSource = response;
        console.log(this.imageSource)
      }
    })
  }

}
