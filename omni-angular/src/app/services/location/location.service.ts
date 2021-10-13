import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
 var baseUrlAuth = 'http://localhost:3000/auth/';
const baseUrl = 'http://localhost:3000/locations';
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

 var routeSub = this.route.queryParams.subscribe(params => {
     console.log(params) //log the entire params object
     console.log(params['api_key']+'frommmmmmmmmmmmmmm') //log the value of id
	 
	if(params['api_key']!='')
	{
		this.api_key=params['api_key'];
		this.checkAuth();
	}
	 
   });


	  }

  auth() {

	
   // return this.http.get(baseUrlAuth+ this.api_key);
	return this.http.get(baseUrlAuth+this.api_key);
  }
  checkAuth() {

	 alert(baseUrlAuth+this.api_key);
   // return this.http.get(baseUrlAuth+ this.api_key);
	return this.http.get(baseUrlAuth+this.api_key);
  } 
  get() {
    return this.http.get(baseUrlAuth);
  }
  getAllLocations() {
    return this.http.get(baseUrl);
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
