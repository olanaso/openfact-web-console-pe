import { Model } from './model'
import { Restangular } from '../restangular/restangular';

export class InvoiceModel implements Model {

    /*Restangular*/
    restangular: Restangular;

    /*Attributes*/
    id: string;
    issueDate: Date;

    /*Constructor*/
    constructor(restangular: Restangular) {
        this.restangular = restangular;
    }

}
