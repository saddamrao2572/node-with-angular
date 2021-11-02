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
    locationID='';

  constructor(private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router) {




	  }

  auth() {
	   var routeSub = this.route.queryParams.subscribe(params => {
			 
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
			}
			 
		   });
	  
	  
    return this.http.get(baseUrlAuth+ this.api_key);

  }
  checkAuth() {
	  
	  
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
			}
			 
		   });
	  
	  
	  
    return this.http.get(baseUrl + this.api_key);
  } 
  getAllCategories() {
    var routeSub = this.route.queryParams.subscribe(params => {
			 
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
			}
			if(params['locationID']!='')
			{
				this.locationID=params['locationID'];
			}
			 
		   });
	  
	  
	  
    return this.http.get(baseUrlURL +'/categories/'+ this.locationID  +'/'+ this.api_key);
  }
  getAllMenu() {
    var routeSub = this.route.queryParams.subscribe(params => {
			 
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
			}
			if(params['locationID']!='')
			{
				this.locationID=params['locationID'];
			}
			 
		   });
	  
	  
	  
    return this.http.get(baseUrlURL +'/menu/'+ this.locationID  +'/'+ this.api_key);
  }
   getAllTickets() {
    var routeSub = this.route.queryParams.subscribe(params => {
			 
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
			}
			if(params['locationID']!='')
			{
				this.locationID=params['locationID'];
			}
			 
		   });
	  
	  
	  
    return this.http.get(baseUrlURL +'/tickets/'+ this.locationID  +'/'+ this.api_key);
  }
  
    getAllItems() {
    var routeSub = this.route.queryParams.subscribe(params => {
			 
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
			}
			if(params['locationID']!='')
			{
				this.locationID=params['locationID'];
			}
			 
		   });
	  
	  
	  
    return this.http.get(baseUrlURL +'items/'+ this.locationID  +'/'+ this.api_key);
  }
  
  
    getAllModifire() {
    var routeSub = this.route.queryParams.subscribe(params => {
			 
			if(params['api_key']!='')
			{
				this.api_key=params['api_key'];
			}
			if(params['locationID']!='')
			{
				this.locationID=params['locationID'];
			}
			 
		   });
	  
	  
	  
    return this.http.get(baseUrlURL +'/modifiers/'+ this.locationID  +'/'+ this.api_key);
  }
  
  
 menu() {
    return this.http.get(menueUrl);
  }
  
 
  
  

}
