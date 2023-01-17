import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Subject, Observable, BehaviorSubject, takeUntil} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private dogImageUrl = "https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true";
  private catImageUrl = "https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true";
  private birdImageUrl = "https://shibe.online/api/birds?count=1&urls=true&httpsUrls=true";

  currentImageSource$ = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) { }

  public getDogImage() {
    this.http.get(this.dogImageUrl).subscribe({
      next: (response: any) => {
        this.currentImageSource$.next(response);
      }
    });
  }

  public getCatImage() {
    this.http.get(this.catImageUrl).subscribe({
      next: (response: any) => {
        this.currentImageSource$.next(response);
      }
    });
  }

  public getBirdImage() {
    this.http.get(this.birdImageUrl).subscribe({
      next: (response: any) => {
        this.currentImageSource$.next(response);
      }
    });
  }
}
