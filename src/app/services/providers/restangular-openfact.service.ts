import { Injectable } from '@angular/core';
import { RestangularService } from './restangular.service';
import { Http } from '@angular/http';

@Injectable()
export class RestangularOpenfactService extends RestangularService {


  //public static path: string = "http://192.168.1.41:8081/admin";

  public static domainUrl: string = 'http://192.168.1.41:8081/admin';
  
  constructor(http: Http) {
    super(http, RestangularOpenfactService.domainUrl);    
  }

  public clone() {
    let restangularOpenfactService = new RestangularOpenfactService(this.http);
    restangularOpenfactService.path = this.path;
    //console.log("HolA: "+this.domainUrl);
    
    return restangularOpenfactService;
  }

}
