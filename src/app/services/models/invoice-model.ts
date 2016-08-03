import { Model } from './model'
import { RestangularService } from '../providers/restangular.service';
import { RestangularOpenfactService } from '../providers/restangular-openfact.service';

export class InvoiceModel extends Model {

    /*Attributes*/
    id: string;
    issueDate: Date;

    /*Constructor*/
    constructor(restangularOpenfactService: RestangularOpenfactService) {
        super(restangularOpenfactService);
    }

}
