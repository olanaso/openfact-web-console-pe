import { Model } from './model'
import { RestangularService } from '../providers/restangular.service';
import { RestangularOpenfactService } from '../providers/restangular-openfact.service';

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
