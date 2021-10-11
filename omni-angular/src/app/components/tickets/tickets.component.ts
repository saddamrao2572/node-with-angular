import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location/location.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
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
  getMenu() {
   
  }
   getTickets() {
   
   
  }
  

}
