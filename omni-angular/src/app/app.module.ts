import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TicketsComponent } from './components/tickets/tickets.component';
 import { AuthComponent } from './components/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    CategoriesComponent,
	TicketsComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
