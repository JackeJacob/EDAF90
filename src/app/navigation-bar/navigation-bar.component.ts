import { ApplicationInitStatus, Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { WatchlistComponent } from '../watchlist/watchlist.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
