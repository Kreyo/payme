import { Component, Input } from '@angular/core';

@Component({
  selector: 'currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.css']
})
export class CurrencySelectorComponent {
  objectKeys = Object.keys;
  @Input() rates: Object;
  @Input() changeSelectedCurrency: Function;
  @Input() changeSelectedAmount: Function;
  @Input() selectedAmount: string;
}
