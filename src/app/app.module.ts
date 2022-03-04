import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { ViewFilmComponent } from './view-film/view-film.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NoteComponent } from './note/note.component';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from  '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app.RoutingModule';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    ViewFilmComponent,
    NavigationBarComponent,
    NoteComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
