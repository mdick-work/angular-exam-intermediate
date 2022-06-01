import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksDisplayComponent } from './stocks-display.component';

describe('StocksDisplayComponent', () => {
  let component: StocksDisplayComponent;
  let fixture: ComponentFixture<StocksDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StocksDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
