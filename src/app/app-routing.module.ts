import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';

const routes: Routes = 
[
  { path: '', redirectTo: '/search', pathMatch: 'full'},
  { path: 'search', component: SearchComponent },
  { path: 'search/:productName', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
