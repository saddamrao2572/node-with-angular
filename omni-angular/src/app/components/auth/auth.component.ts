import { Component, OnInit , Renderer2, RendererFactory2 } from '@angular/core';
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
  currentResponce : any;
  message = 'please enter api key to connect omivores system';
  isCheck = false;
  api_key = '';
  locationBTn = '';
  restaurant = '';
	
  constructor(private LocationService: LocationService,
    private route: ActivatedRoute,
    private router: Router,private renderer: Renderer2,private rendererFactory: RendererFactory2) { 
	
	this.renderer = this.rendererFactory.createRenderer(null, null);
	}

  ngOnInit() {
	 var routeSub = this.route.queryParams.subscribe(params => {
     console.log(params) //log the entire params object
     console.log(params['api_key']) //log the value of id
	 this.isCheck = false;
	if(params['api_key']!='')
	{
		this.api_key=params['api_key'];
		this.getAuth();
		
		
	}
	 
   });
		
  }
  counter(i: number) {
    return new Array(i);
	}

  conectOmnivores() {
	  console.log('Api key');
  }
  

  
  
  
  
  
  
  
  checkAuth() {
		  console.log('ok');

			
		   
		  }
   
   
  getAuth() {
		
			this.LocationService.auth()
			  .subscribe(
				data => {
				  this.api_key =  this.api_key;
				  this.message ='you are successfully conncted to omnivores';
				  
				  const elem = this.renderer.createElement('a');
					const text = this.renderer.createText('View All Locations');
					this.renderer.setAttribute(elem, 'href', '/locations?api_key='+this.api_key);
					this.renderer.appendChild(elem, text);
				  
				
					// Append the created div to the body element
					this.renderer.appendChild(document.body, elem);
				 
				  console.log(data);
				},
				error => {
				  console.log(error);
				  this.locationBTn="";
				   this.message = ' Your are Not able  Connect wit omnivores please check the details and try again ';
				  
				});

		
		  }
   
  
 getAllLocations() {
	  
	  
		
		
		   
		  }
   
  

}
