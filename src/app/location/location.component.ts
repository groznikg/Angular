import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})


export class LocationComponent implements OnInit {

  longitude: number;
  latitude: number;
  location: any ;
  name: string;
  country: string;

  
  constructor(private _http: HttpService) { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position) =>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      
      
      this._http.getLocation(this.latitude, this.longitude).subscribe(data => {
        this.location = data;
        console.log(data);
        this.name = data.results[0].components.city;
        this.country = data.results[0].components.country;
      })
    })
  }
}
