import { RestangularService } from '../services/rest/restangular.service';
import { Model } from './model'
import { RestangularOpenfactService } from '../services/rest/restangular-openfact.service';


export class InvoiceModel extends Model {

    /*Attributes*/
    id: string;
    issueDate: Date;

    /*Constructor*/
    constructor(restangularOpenfactService: RestangularOpenfactService) {
        super(restangularOpenfactService);
    }

}
