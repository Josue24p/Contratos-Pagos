import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenServicioList } from './orden-servicio-list';

describe('OrdenServicioList', () => {
  let component: OrdenServicioList;
  let fixture: ComponentFixture<OrdenServicioList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdenServicioList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdenServicioList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
