import { Component, OnInit } from '@angular/core';
import { apiService } from '../services/api.service';
import { viewService } from '../services/view.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {
  beers
  constructor(
    private _apiService: apiService, 
    private _viewService: viewService
  ) { }

  ngOnInit() {
    this.getBeers();
  }

  getBeers() {
    this._apiService.getBeers().subscribe(
      data => { this.beers = data },
      err => console.error(err),
      () => console.log('beers loaded successfully...')
    );
  }

  updateBeer(id, currentDraft) {
    currentDraft = currentDraft ? false : true;
    this._apiService.updateBeer(id, currentDraft).subscribe(
      data => { console.log(data) },
      err => console.error(err),
      () => {
        this.beers = this._viewService.updateBeer(this.beers, id, currentDraft)
      });
  }

  removeBeer(id) {
    this._apiService.removeBeer(id).subscribe(
      data => { console.log(data) },
      err => console.error(err),
      () => {
        this.beers = this.beers.filter(beer => beer._id !== id);
      }
    );
  }

}
