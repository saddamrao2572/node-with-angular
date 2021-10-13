import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  currentTutorial = null;
  message = '';
  api_key = '';
  restaurant = '';
	
  constructor(private LocationService: LocationService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
	 var routeSub = this.route.queryParams.subscribe(params => {
     console.log(params) //log the entire params object
     console.log(params['api_key']) //log the value of id
	 
	if(params['api_key']!='')
	{
		this.api_key=params['api_key'];
		this.getAuth();
	}else
	{
		
	}
	 
   });
		
  }
  counter(i: number) {
    return new Array(i);
	}

  conectOmnivores() {
	  console.log('Api key');
  }
  
  
  onSubmit(): void {
	 
    // Process checkout data here
   if(this.api_key=='')
   {
	  
	   alert('please provide api key');
	   console.log('please provide api key');
   }else
   {
	    console.log('key set provide api key'+this.api_key);
		
	   //alert('please wait ');
	    const data = {
      api_key: this.api_key,
      restaurant: this.restaurant
    };
	   this.LocationService.auth()
		  .subscribe(
			response => {
			  console.log(response);
			  
			 
			  
			},
			error => {
			  console.log(error);
			});
	   
   }
   
  }
  
  
  
  
  
  
  
  
  checkAuth() {
		  console.log('ok');

			
		   
		  }
   
   
  getAuth() {
			this.LocationService.auth()
			  .subscribe(
				data => {
				  this.api_key =  this.api_key;
				  console.log(data);
				},
				error => {
				  console.log(error);
				});

			
		   
		  }
   
  
 getAllLocations() {
	  
	  
		
		
		   
		  }
   
  

}
