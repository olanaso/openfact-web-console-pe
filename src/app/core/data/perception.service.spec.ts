/**
 * Created by lxpary on 14/12/16.
 */
import { TestBed, async, inject } from '@angular/core/testing';
import { PerceptionService } from './perception.service';

describe('Service: Perception', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PerceptionService]
    });
  });

  it('should ...', inject([PerceptionService], (service: PerceptionService) => {
    expect(service).toBeTruthy();
  }));
});
