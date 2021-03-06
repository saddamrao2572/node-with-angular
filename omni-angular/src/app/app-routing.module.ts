import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './components/location/location.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { AuthComponent } from './components/auth/auth.component';

const routes: Routes = [
  { path: 'locations', component: LocationComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'tickets', component: TicketsComponent },
  { path: 'auth', component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
