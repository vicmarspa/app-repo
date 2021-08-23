import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedafinalComponent } from './busquedafinal.component';

describe('BusquedafinalComponent', () => {
  let component: BusquedafinalComponent;
  let fixture: ComponentFixture<BusquedafinalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedafinalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedafinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
