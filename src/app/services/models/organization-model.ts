import { Model } from './model'
import { Restangular } from '../restangular/restangular';

export class OrganizationModel implements Model {

    /*Restangular*/
    public restangular: Restangular;

    /*Attributes*/
    public id: string;
    public name: string;
    public supplierName: string;
    public registrationName: string;
    public additionalAccountId: string;
    public assignedIdentificationId: string;
    public enabled: boolean;

    /*Constructor*/
    constructor(restangular: Restangular) {
        this.restangular = restangular;
    }

}