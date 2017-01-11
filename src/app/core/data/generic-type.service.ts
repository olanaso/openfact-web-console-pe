/**
 * Created by lxpary on 11/01/17.
 */
import {Injectable} from '@angular/core';
import {Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {RestangularOpenfact} from './restangular-openfact';
import {Organization} from '../models/organization.model';
import {GenericType} from '../models/generic-type.model';

import {KeycloakHttp} from '../keycloak.http';

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

  public build(organization: Organization, id?: string): GenericType {
    let generic = new GenericType();
    generic.id = id;
    generic.restangular = this.restangular.one("organizations", organization.organization).all(basePath).all(extensionPath).one(genericBasePath, id);
    return generic;
  }

  public searchTipoAfectacionIgv(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("afectacion-igv")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoComprobante(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("comprobante-electronico")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoConceptosTributarios(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("conceptos-tributarios")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoDocumento(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-documento")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoDocumentoRelacionadoGuia(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("documento-relacionado-guia")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoDocumentoRelacionadoTributo(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("documento-relacionado-tributo")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoElementosAdicionalesComprobante(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("elementos-adicionales-comprobante")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoEstadoItem(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("estado-item")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoModalidadTraslado(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("modalidad-traslado")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoMoneda(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("moneda")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoMotivoTraslado(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("motivo-traslado")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoNotaCredito(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-nota-credito")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoNotaDebito(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-nota-debito")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoOperacion(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-operacion")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoPrecioVentaUnitario(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("precio-venta-unitario")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoReciboServiciosPublicos(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("recibo-servicios-publicos")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoRegimenPercepcion(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("regimen-percepcion")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoRegimenRetencion(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("regimen-retencion")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoSistemaCalculoISC(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("sistema-calculo-isc")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoTributo(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("tipo-tributo")
      .get()
      .map(response => {
        return response.json();
      });
  }
  public searchTipoValorVenta(organization: Organization): Observable<GenericType> {
    return this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .all(genericBasePath)
      .all("valor-venta")
      .get()
      .map(response => {
        return response.json();
      });
  }

}
