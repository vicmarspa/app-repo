import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdocumentComponent } from './editdocument.component';

describe('EditdocumentComponent', () => {
  let component: EditdocumentComponent;
  let fixture: ComponentFixture<EditdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditdocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
