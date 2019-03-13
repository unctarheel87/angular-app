import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { BeerComponent } from './beer-list/beer/beer.component';
import { apiService } from './services/api.service';
import { viewService } from './services/view.service';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    apiService,
    viewService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
