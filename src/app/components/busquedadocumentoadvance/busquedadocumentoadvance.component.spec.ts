import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedadocumentoadvanceComponent } from './busquedadocumentoadvance.component';

describe('BusquedadocumentoadvanceComponent', () => {
  let component: BusquedadocumentoadvanceComponent;
  let fixture: ComponentFixture<BusquedadocumentoadvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedadocumentoadvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedadocumentoadvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
