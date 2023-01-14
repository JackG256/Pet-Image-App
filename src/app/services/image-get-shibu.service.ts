import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageGetShibuService {

  constructor(private http: HttpClient) { }

  getImageSource() {
    return this.http.get("https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true")
  }
}
