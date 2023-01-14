import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageGetCatsService {

  constructor(private http: HttpClient) { }

  getImageSource() {
    return this.http.get("https://shibe.online/api/cats?count=1&urls=true&httpsUrls=true")
  }
}
