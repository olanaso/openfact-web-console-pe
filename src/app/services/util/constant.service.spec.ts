/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { ConstantService } from './constant.service';

describe('Service: Constant', () => {
  beforeEach(() => {
    addProviders([ConstantService]);
  });

  it('should ...',
    inject([ConstantService],
      (service: ConstantService) => {
        expect(service).toBeTruthy();
      }));
});
