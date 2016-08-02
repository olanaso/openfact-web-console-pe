/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { RestangularOpenfactService } from './restangular-openfact.service';

describe('Service: RestangularOpenfact', () => {
  beforeEach(() => {
    addProviders([RestangularOpenfactService]);
  });

  it('should ...',
    inject([RestangularOpenfactService],
      (service: RestangularOpenfactService) => {
        expect(service).toBeTruthy();
      }));
});
