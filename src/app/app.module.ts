import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatRadioModule } from '@angular/material/radio'
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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    WatchlistComponent,
    ViewFilmComponent,
    NavigationBarComponent,
    NoteComponent,
    SearchComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatAutocompleteModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
