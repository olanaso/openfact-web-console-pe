import { Model } from './model'
import { Restangular } from '../restangular';
 
export class CustomerModel implements Model {

  /*Restangular*/
  public restangular: Restangular;

  id: string //ID DEL CLIENTE
  assignedIdentificationId: string // NUMERO DE DOCUMENTO.
  additionalAccountId: string //TIPO DE DOCUMENTO -- RUC O DNI
  registrationName: string // RAZON SOCIAL DE LA EMPRESA
  email: string;//CORREO ELECTRONICO DEL CLIENTE


    /*Constructor*/
    constructor(restangular: Restangular) {
        this.restangular = restangular;
    }

    public clone(): CustomerModel {
        let copy = Object.assign({}, this);
        delete copy['restangular'];
        return copy;
    }

}
