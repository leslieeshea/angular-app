import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BreweriesComponent } from './breweries/breweries.component';

const routes: Routes = [
  // the component that has a path empty will load first
  { path: '', component: HomeComponent },
  { path: 'breweries', component: BreweriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
