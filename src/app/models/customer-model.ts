/**
 * customer
 */
import { Model } from './model';
import { RestangularOpenfactService } from '../services/rest/restangular-openfact.service';
import { RestangularService } from '../services/rest/restangular.service';

export class CustomerModel extends Model {
    id: string //ID DEL CLIENTE
    assignedIdentificationId: string // NUMERO DE DOCUMENTO.
    additionalAccountId: string //TIPO DE DOCUMENTO -- RUC O DNI
    registrationName: string // RAZON SOCIAL DE LA EMPRESA
    email: string;//CORREO ELECTRONICO DEL CLIENTE
    // constructor(restangularOpenfactService: RestangularOpenfactService) {
    //     super(restangularOpenfactService);
    // }
}