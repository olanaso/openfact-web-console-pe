import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { RestangularService } from './restangular.service';

export const genericIdName = 'id';
export const basePath = 'sunat';
export const extensionPath = 'ubl-extensions';
export const genericBasePath = 'generic-types';

@Injectable()
export class OrganizationSunatService {

  constructor(private restangular: RestangularService) { }

  getAllTiposComprobantePago(organizationName: string): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all('tipos-comprobante-pago')
      .get()
      .map(response => response.json());
  }

  getAllTiposDocumentEntidad(organizationName: string): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all('tipos-documento-entidad')
      .get()
      .map(response => response.json());
  }

  getAllTiposAfectacionIGV(organizationName: string): Observable<any> {
    return this.restangular.one('organizations', organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all('tipos-afectacion-igv')
      .get()
      .map(response => response.json());
  }

}
