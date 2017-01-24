import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RestangularService } from './restangular.service';

export const serverInfoBasePAth: string = 'serverinfo';


@Injectable()
export class ServerInfoService {

  private restangular: RestangularService;

  constructor(restangular: RestangularService) {
    this.restangular = restangular.all("admin");
  }

  public get(): Observable<any> {
    return this.restangular
      .all(serverInfoBasePAth)
      .get()
      .map(response => response.json());
  }

}
