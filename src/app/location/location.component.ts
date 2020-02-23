import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})


export class LocationComponent implements OnInit {

  longitude: number;
  latitude: number;
  name: string;
  
  constructor() { }

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position) =>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    })



  }

}
