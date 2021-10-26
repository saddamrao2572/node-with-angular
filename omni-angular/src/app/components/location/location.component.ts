import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
 locations: any;
 
   menuee: any;
   ticketss: any;
  currentLocations = null;
  currentIndex = -1;
  id = '';
  title = '';
  addOn = null;
  api_key='sds';
    locationID='dsds';
    urll='/categories?locationID=';
    urllpart='&api_key=';

  comboBox = null;
  description = '';
  

  constructor(private LocationService: LocationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
	   this.conectOmnivores();
	   
	     var routeSub = this.route.queryParams.subscribe(params => {
			 //console.log(params) //log the entire params object
			// console.log(params['api_key']) //log the value of id
			 
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
				//this.checkAuth();
			}
			if(params['locationID']!='')
			{
				this.locationID=params['locationID'];
				//this.checkAuth();
			}
			 
		   });
	   
	   
	   
	   //this.counter();
  }
  counter(i: number) {
    return new Array(i);
	}

  conectOmnivores() {
	  this.LocationService.getAllLocations()
      .subscribe(
        data => {
          this.locations = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
		
  }
  getMenu() {
   
  } 
 
   getTickets() {
   
   
  }
  

}
