import { Injectable } from '@angular/core';

@Injectable()
export class viewService {
  constructor() { }

  updateBeer(beers, id, currentDraft) {
    return beers.map(beer => {  
      if (beer._id === id) {
        return { ...beer, currentDraft: currentDraft };
      } else {
        return beer;
      }
    })
  }
  removeBeer(id) {
    
  }

}