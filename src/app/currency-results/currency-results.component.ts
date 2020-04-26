import { Component, Input } from '@angular/core';

@Component({
  selector: 'currency-results',
  templateUrl: './currency-results.component.html',
  styleUrls: ['./currency-results.component.css']
})

export class CurrencyResultsComponent{
  @Input() rates: Object;
  @Input() selectedCurrency: string;
  @Input() selectedAmount: any;
}
