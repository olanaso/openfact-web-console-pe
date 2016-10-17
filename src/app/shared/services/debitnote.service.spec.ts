/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DebitnoteService } from './debitnote.service';

describe('Service: Debitnote', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebitnoteService]
    });
  });

  it('should ...', inject([DebitnoteService], (service: DebitnoteService) => {
    expect(service).toBeTruthy();
  }));
});
