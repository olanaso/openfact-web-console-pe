import { Model } from './model'
import { Restangular } from '../restangular';
import { Buildable, ObjectBuilder, ResponseToModel } from '../utils';
export class CertificateModel extends Model implements Buildable{

  public alias:string;//Alias del Certificado
  public certified:any;//Certificado
  public password:string;//password del certificado
  public passwordConfirmation:string;//IMPORTE TOTAL
  public validity:Date;//Fecha Vigencia

  constructor(restangular?:Restangular) {
    super();
    this.restangular = restangular;
  }

}
