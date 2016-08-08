/**
 * customer
 */
import { Model } from './model';
import { RestangularOpenfactService } from '../providers/restangular-openfact.service';
import { RestangularService } from '../providers/restangular.service';

export class CustomerModel implements Model {
    /*Restangular*/
    restangular: RestangularService;

    id: string //ID DEL CLIENTE
    assignedIdentificationId: string // NUMERO DE DOCUMENTO.
    additionalAccountId: string //TIPO DE DOCUMENTO -- RUC O DNI
    registrationName: string // RAZON SOCIAL DE LA EMPRESA
    email: string;//CORREO ELECTRONICO DEL CLIENTE


    /*Constructor*/
    constructor(restangularService: RestangularService) {
        this.restangular = restangularService;
    }
}