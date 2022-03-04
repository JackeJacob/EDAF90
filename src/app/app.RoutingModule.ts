import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { SearchComponent } from './search/search.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
    { path: 'WatchList', component: WatchlistComponent },
    { path: 'Search', component: SearchComponent },
    { path: 'Home', component: HomeComponent },
    { path: '', redirectTo: "/Home", pathMatch:"full" },
    {path: '**', pathMatch: 'full', 
    component: PageNotFoundComponent },

    
]; // sets up routes constant where you define your routes

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }