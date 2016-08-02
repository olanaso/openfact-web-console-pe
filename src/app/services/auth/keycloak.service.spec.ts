/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { KeycloakService } from './keycloak.service';

describe('Service: Keycloak', () => {
  beforeEach(() => {
    addProviders([KeycloakService]);
  });

  it('should ...',
    inject([KeycloakService],
      (service: KeycloakService) => {
        expect(service).toBeTruthy();
      }));
});
