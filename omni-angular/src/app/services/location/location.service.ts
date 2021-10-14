import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
 var baseUrlURL = 'http://localhost:3000/auth/';
 var baseUrlAuth = 'http://localhost:3000/auth/';
const baseUrl = 'http://localhost:3000/auth/locations/all/';
// const menueUrl = 'https://api.omnivore.io/1.0/locations/i57z4qMT/menu/categories?api_key=fa1541435e6c4f82a1a6dccd86bc43a2';
const menueUrl = 'http://localhost:3000/categories';
const ticketsUrl = 'http://localhost:3000/tickets';
   const idd='';
@Injectable({
  providedIn: 'root'
})
export class LocationService {

    api_key='';
 
    
  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {




	  }

  auth() {
	   var routeSub = this.route.queryParams.subscribe(params => {
			 //console.log(params) //log the entire params object
			// console.log(params['api_key']) //log the value of id
			 
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
				//this.checkAuth();
			}
			 
		   });
	  
	  
    return this.http.get(baseUrlAuth+ this.api_key);
	//return responce;
  }
  checkAuth() {
	  
	  
	  

	// alert(baseUrlAuth+this.api_key);
   // return this.http.get(baseUrlAuth+ this.api_key);
	return this.http.get(baseUrlAuth+this.api_key);
  } 
  get() {
    return this.http.get(baseUrlAuth);
  }
  getAllLocations() {
	  
			var routeSub = this.route.queryParams.subscribe(params => {
			
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
				//this.checkAuth();
			}
			 
		   });
	  
    return this.http.get(baseUrl + this.api_key);
  } 
  getAllCategories() {
    return this.http.get(menueUrl);
  }
 menu() {
    return this.http.get(menueUrl);
  }
  
  getAllTickets() {
    return this.http.get(ticketsUrl);
  }
  
  

}
