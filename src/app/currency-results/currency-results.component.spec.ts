import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyResultsComponent } from './currency-results.component';

describe('CurrencyResultsComponent', () => {
  let component: CurrencyResultsComponent;
  let fixture: ComponentFixture<CurrencyResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
