import { TestBed } from '@angular/core/testing';

import { CalificarService } from './calificar.service';

describe('CalificarService', () => {
  let service: CalificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
