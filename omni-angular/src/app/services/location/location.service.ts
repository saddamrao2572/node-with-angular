import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/locations';
// const menueUrl = 'https://api.omnivore.io/1.0/locations/i57z4qMT/menu/categories?api_key=fa1541435e6c4f82a1a6dccd86bc43a2';
const menueUrl = 'http://localhost:3000/categories';
const ticketsUrl = 'http://localhost:3000/tickets';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

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
