import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialCambios } from './historial-cambios';

describe('HistorialCambios', () => {
  let component: HistorialCambios;
  let fixture: ComponentFixture<HistorialCambios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialCambios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialCambios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
