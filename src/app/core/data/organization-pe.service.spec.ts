/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrganizationPeService } from './organization-pe.service';

describe('OrganizationPeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationPeService]
    });
  });

  it('should ...', inject([OrganizationPeService], (service: OrganizationPeService) => {
    expect(service).toBeTruthy();
  }));
});
