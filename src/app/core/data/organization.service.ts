import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Organization } from './../model/organization.model';
import { RestangularService } from './restangular.service';
import { URLSearchParams } from '@angular/http';

const organizationIdName: string = 'organization';
const organizationsPath: string = 'organizations';

@Injectable()
export class OrganizationService {

  private restangular: RestangularService;

  constructor(restangular: RestangularService) {
    this.restangular = restangular.all("admin");
  }

  public findById(id: string): Observable<Organization> {
    let organizationRestangular = this.restangular.one(organizationsPath, id);
    return organizationRestangular
      .get()
      .map(response => {
        let organization = new Organization(organizationRestangular);
        return Object.assign(organization, response.json());
      });
  }

  public create(organization: Organization): Observable<Organization> {
    let organizationRestangular = this.restangular.all(organizationsPath);
    return organizationRestangular
      .post(organization)
      .map(response => {
        if (response.status === 201 || 204) {
          return undefined;
        }
        let json = response.json();
        let organization = new Organization(organizationRestangular.one("", json[organizationIdName]));
        return Object.assign(organization, json);
      });
  }

  public getAll(queryParams?: URLSearchParams): Observable<Organization[]> {
    let organizationsRestangular = this.restangular.all(organizationsPath);
    return organizationsRestangular
      .get(queryParams)
      .map(response => {
        let json = response.json();
        let organizations = new Array<Organization>();
        json.forEach(element => {
          let organization = new Organization(organizationsRestangular.one("", element[organizationIdName]));
          organizations.push(Object.assign(organization, element));
        });
        return organizations;
      });
  }

}
