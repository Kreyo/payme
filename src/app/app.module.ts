import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrencySelectorComponent } from './currency-selector/currency-selector.component';
import { CurrencyResultsComponent } from './currency-results/currency-results.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencySelectorComponent,
    CurrencyResultsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
