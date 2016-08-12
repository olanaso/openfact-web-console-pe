import {Model} from './model'
import {Restangular} from '../restangular';

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
    public postalAddress: PostalAddress;

    /*Constructor*/
    constructor(restangular: Restangular) {
        this.restangular = restangular;
    }

    public clone(): OrganizationModel {
        let copy = Object.assign({}, this);
        delete copy['restangular'];
        return copy;
    }

    public save() {
        return this.restangular.put(this.clone());
    }
}

export interface PostalAddress {
    streetName: string;
    citySubdivisionName: string;
    cityName: string;
    countrySubentity: string;
    district: string;
    countryIdentificationCode: string;
}