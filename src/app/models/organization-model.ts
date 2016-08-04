import { RestangularService } from '../services/rest/restangular.service';
import { Model } from './model'
import { RestangularOpenfactService } from '../services/rest/restangular-openfact.service';
import { InvoiceService } from '../services/invoice.service';

export class OrganizationModel extends Model {

    /*Attributes*/
    id: string;
    name: string;
    supplierName: string;
    registrationName: string;
    additionalAccountId: string;
    assignedIdentificationId: string;
    enabled: boolean;

    /*Constructor*/
    constructor(restangularOpenfactService: RestangularOpenfactService) {
        super(restangularOpenfactService);
    }

    // builInvoiceService(): InvoiceService {      
    //     return new InvoiceService(this, this.restangular);
    // }

}
