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
   ticketss: any;
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
   
  }
   getTickets() {
   
   
  }
  

}
