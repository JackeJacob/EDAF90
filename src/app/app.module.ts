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

@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    ViewFilmComponent,
    NavigationBarComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
