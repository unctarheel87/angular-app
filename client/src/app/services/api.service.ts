import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class apiService {
  constructor(private http: HttpClient) { }
  url = '/api/beerlist';

  getBeers() {
    return this.http.get(this.url);
  }
  updateBeer(id, currentDraft) {
    return this.http.put(this.url + '/' + id, { currentDraft }, httpOptions);
  }
  removeBeer(id) {
    return this.http.delete(this.url + '/' + id);
  }

}