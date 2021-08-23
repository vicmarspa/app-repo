import { TestBed } from '@angular/core/testing';

import { ViewDocumentService } from './view-document.service';

describe('ViewDocumentService', () => {
  let service: ViewDocumentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewDocumentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
