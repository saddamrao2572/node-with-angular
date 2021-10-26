import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
 categories: any;
 locations: any;
 
   menuee: any;
   catID: any;
   ticketss: any;
   items: any;
   modifire: any;
  currentLocations = null;
  currentIndex = -1;
  id = '';
  title = '';
  
  addOn = null;
  locationID = 'i57z4qMT';
  comboBox = null;
  description = '';

  

  constructor(private LocationService: LocationService) { }

  ngOnInit() {
	   this.conectOmnivores();
	   this.getTickets();
	   this.getModifire();
	   this.getItems();
	   this.getMenu();
  }
  counter(i: number) {
    return new Array(i);
	}

  conectOmnivores() {
	  this.LocationService.getAllCategories()
      .subscribe(
        data => {
          this.categories = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
		
  }
  getMenu() {
	  
	   this.LocationService.getAllMenu()
      .subscribe(
        data => {
          this.menuee = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
   
  }
   getTickets() {
   
	
	 this.LocationService.getAllTickets()
      .subscribe(
        data => {
          this.ticketss = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
   
   
  }
   getItems() {
   
    this.LocationService.getAllItems()
      .subscribe(
        data => {
          this.items = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
   
  }
   getModifire() {
	   
	    this.LocationService.getAllModifire()
      .subscribe(
        data => {
          this.modifire = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
   
   
  }
   chartMethod(s: number) {
	   console.log(s);
	   return s;
   
  }
  

}
