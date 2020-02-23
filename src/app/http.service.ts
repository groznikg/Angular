import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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


}
