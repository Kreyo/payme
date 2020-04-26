import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rates = { EUR: 1, USD: 1 };
  loading = true;
  selectedCurrency = 'EUR';
  selectedAmount = 1;
  constructor() {
    this.changeSelectedCurrency = this.changeSelectedCurrency.bind(this);
    this.changeSelectedAmount = this.changeSelectedAmount.bind(this);
  }

  ngOnInit(): void {
    fetch(`https://openexchangerates.org/api/latest.json?app_id=${environment.apiKey}&base=USD`)
      .then(result => result.json())
      .then(result => this.rates = result.rates)
      .then(() => this.loading = false);
  }

  changeSelectedCurrency(currency) {
    this.selectedCurrency = currency;
  }

  changeSelectedAmount(amount) {
      this.selectedAmount = amount;
   }
}
