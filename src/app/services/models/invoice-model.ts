import { Model } from './model'
import { RestangularService } from '../providers/restangular.service';

export class InvoiceModel implements Model {

    /*Restangular*/
    restangular: RestangularService;

    /*Attributes*/
    id: string;
    issueDate: Date;

    /*Constructor*/
    constructor(restangularService: RestangularService) {
        this.restangular = restangularService;
    }

}
