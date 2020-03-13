import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
interface Location {
  longitude: string;
  latitude: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

  getLocation(latitude, longitude):Observable<any> {
    return this.http.get('https://api.opencagedata.com/geocode/v1/json?key=5c6608f8b44c4f609564a1764086ed0f&q='+latitude+"+"+longitude+'&pretty=1')
  }

}
