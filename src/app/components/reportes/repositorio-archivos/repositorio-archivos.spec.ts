import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositorioArchivos } from './repositorio-archivos';

describe('RepositorioArchivos', () => {
  let component: RepositorioArchivos;
  let fixture: ComponentFixture<RepositorioArchivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepositorioArchivos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepositorioArchivos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
