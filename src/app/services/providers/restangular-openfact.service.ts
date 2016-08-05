import { Injectable } from '@angular/core';
import { RestangularService } from './restangular.service';
import { Http } from '@angular/http';

@Injectable()
export class RestangularOpenfactService extends RestangularService {

  public static domainUrl: string = 'http://localhost:8080/admin';
  
  constructor(http: Http) {
    super(http, RestangularOpenfactService.domainUrl);    
  }

  public clone() {
    let restangularOpenfactService = new RestangularOpenfactService(this.http);
    restangularOpenfactService.path = this.path;
    return restangularOpenfactService;
  }

}
