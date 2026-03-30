import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientePago } from './expediente-pago';

describe('ExpedientePago', () => {
  let component: ExpedientePago;
  let fixture: ComponentFixture<ExpedientePago>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpedientePago]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpedientePago);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
