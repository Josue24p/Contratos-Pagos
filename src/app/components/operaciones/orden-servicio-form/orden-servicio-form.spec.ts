import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenServicioForm } from './orden-servicio-form';

describe('OrdenServicioForm', () => {
  let component: OrdenServicioForm;
  let fixture: ComponentFixture<OrdenServicioForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenServicioForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenServicioForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
