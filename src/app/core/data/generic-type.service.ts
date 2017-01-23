/**
 * Created by lxpary on 11/01/17.
 */
import { Injectable } from '@angular/core';
import { Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { GenericType } from '../models/generic-type.model';

import { KeycloakHttp } from '../keycloak.http';

export const genericIdName: string = 'id';
export const basePath: string = 'sunat';
export const extensionPath: string = 'ubl-extensions';
export const genericBasePath: string = 'generic-types';

@Injectable()
export class GenericTypeService {

  private restangular: RestangularOpenfact;

  constructor(restangular: RestangularOpenfact) {
    this.restangular = restangular;
  }

  public build(organizationName: string, id?: string): GenericType {
    let generic = new GenericType();
    generic.id = id;
    generic.restangular = this.restangular.one("organizations", organizationName).all(basePath).all(extensionPath).one(genericBasePath, id);
    return generic;
  }

  public searchTipoAfectacionIgv(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("afectacion-igv")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoComprobante(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("comprobante-electronico")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoConceptosTributarios(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("conceptos-tributarios")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoDocumento(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-documento")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoDocumentoRelacionadoGuia(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("documento-relacionado-guia")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoDocumentoRelacionadoTributo(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("documento-relacionado-tributo")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoElementosAdicionalesComprobante(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("elementos-adicionales-comprobante")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoEstadoItem(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("estado-item")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoModalidadTraslado(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("modalidad-traslado")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoMoneda(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("moneda")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoMotivoTraslado(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("motivo-traslado")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoNotaCredito(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-nota-credito")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoNotaDebito(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-nota-debito")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoOperacion(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-operacion")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoPrecioVentaUnitario(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("precio-venta-unitario")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoReciboServiciosPublicos(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("recibo-servicios-publicos")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoRegimenPercepcion(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("regimen-percepcion")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoRegimenRetencion(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("regimen-retencion")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoSistemaCalculoISC(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("sistema-calculo-isc")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoTributo(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-tributo")
      .post()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoValorVenta(organizationName: string): Observable<GenericType> {
    return this.restangular.one("organizations", organizationName)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("valor-venta")
      .post()
      .map(response => {
        return response.json();
      });
  }

}
