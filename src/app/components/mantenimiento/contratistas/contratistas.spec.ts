import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contratistas } from './contratistas';

describe('Contratistas', () => {
  let component: Contratistas;
  let fixture: ComponentFixture<Contratistas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contratistas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contratistas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
