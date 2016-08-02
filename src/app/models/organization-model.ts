import { RestangularService } from '../services/rest/restangular.service';
import { Model } from './model'
import { RestangularOpenfactService } from '../services/rest/restangular-openfact.service';

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

}
