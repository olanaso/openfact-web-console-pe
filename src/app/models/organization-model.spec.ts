/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {OrganizationModel} from './organization-model';

describe('OrganizationModel', () => {
  it('should create an instance', () => {
    expect(new OrganizationModel('name', 'description')).toBeTruthy();
  });
});
