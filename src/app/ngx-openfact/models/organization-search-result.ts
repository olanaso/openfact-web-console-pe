import { Organization } from './organization';

export interface OrganizationSearchResult {

  master: Organization;
  owned: Organization[];
  collaborated: Organization[];

}
