/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobreportService } from './jobreport.service';

describe('JobreportService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobreportService]
    });
  });

  it('should ...', inject([JobreportService], (service: JobreportService) => {
    expect(service).toBeTruthy();
  }));
});
