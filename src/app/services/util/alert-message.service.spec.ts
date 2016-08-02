/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { AlertMessageService } from './alert-message.service';

describe('Service: AlertMessage', () => {
  beforeEach(() => {
    addProviders([AlertMessageService]);
  });

  it('should ...',
    inject([AlertMessageService],
      (service: AlertMessageService) => {
        expect(service).toBeTruthy();
      }));
});
