import { Component, OnInit } from '@angular/core';
import { Beer } from '../../beer';
import { apiService } from '../../services/api.service';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.scss']
})
export class BeerComponent implements OnInit {
  beer : Beer = {
    breweryName: '',
    beerName: '',
    beerStyle: '',
    abv: '',
    ibu: ''
  }; 

  constructor(private _apiService: apiService) { }

  ngOnInit() {
  }

  createBeer(e) {
    e.preventDefault();
    const newBeer = {
      "Brewery Name": this.beer.breweryName,
      "Beer Name": this.beer.beerName,
      "Beer Style": this.beer.beerStyle,
      ABV: this.beer.abv,
      IBU: this.beer.ibu
    }
    this._apiService.createBeer(newBeer).subscribe(
      data => { console.log(data) },
      err => console.error(err),
      () => {
      
      }
    );
  }

}
