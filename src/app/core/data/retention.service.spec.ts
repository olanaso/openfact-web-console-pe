/**
 * Created by lxpary on 15/12/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { RetentionService } from './retention.service';

describe('Service: Retention', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetentionService]
    });
  });

  it('should ...', inject([RetentionService], (service: RetentionService) => {
    expect(service).toBeTruthy();
  }));
});
