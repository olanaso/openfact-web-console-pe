/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreditnoteService } from './creditnote.service';

describe('Service: Creditnote', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreditnoteService]
    });
  });

  it('should ...', inject([CreditnoteService], (service: CreditnoteService) => {
    expect(service).toBeTruthy();
  }));
});
