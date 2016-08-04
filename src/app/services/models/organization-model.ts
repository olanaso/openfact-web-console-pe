import { Model } from './model'
<<<<<<< HEAD:src/app/models/organization-model.ts
import { RestangularOpenfactService } from '../services/rest/restangular-openfact.service';
import { InvoiceService } from '../services/invoice.service';
=======
import { RestangularService } from '../providers/restangular.service';
import { RestangularOpenfactService } from '../providers/restangular-openfact.service';
>>>>>>> e351ed0ac80cb6f403a1747630c6bbf18a3902de:src/app/services/models/organization-model.ts

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
