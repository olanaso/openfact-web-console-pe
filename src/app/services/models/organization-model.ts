import { Model } from './model'
import { RestangularService } from '../providers/restangular.service';

export class OrganizationModel implements Model {

    /*Restangular*/
    restangular: RestangularService;

    /*Attributes*/
    id: string;
    name: string;
    supplierName: string;
    registrationName: string;
    additionalAccountId: string;
    assignedIdentificationId: string;
    enabled: boolean;

    /*Constructor*/
    constructor(restangularService: RestangularService) {
        this.restangular = restangularService;
    }

}
