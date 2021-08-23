import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedauniversidadComponent } from './busquedauniversidad.component';

describe('BusquedauniversidadComponent', () => {
  let component: BusquedauniversidadComponent;
  let fixture: ComponentFixture<BusquedauniversidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedauniversidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedauniversidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
