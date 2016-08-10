/**
 * Created by AHREN on 10/08/2016.
 */
import {Model} from './model'
import {RestangularService} from '../providers/restangular.service';

export class CertifiedModel implements Model {

  /*Restangular*/
  restangular:RestangularService;

  /*Attributes*/
  public alias:string;//Alias del Certificado
  public certificate:any;//Certificado
  public password:string;//password del certificado
  public passwordConfirmation:string;//IMPORTE TOTAL
  public validity:Date;//Fecha Vigencia
 
  /*Constructor*/
  constructor(restangularService:RestangularService) {
    this.restangular = restangularService;
  }

}
