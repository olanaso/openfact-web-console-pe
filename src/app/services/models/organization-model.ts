import {Model} from './model'
import {Restangular} from '../restangular';

export class OrganizationModel implements Model {

    restangular: Restangular;

    id: string;
    name: string;
    description: string;
    supplierName: string;
    registrationName: string;
    additionalAccountId: string;
    assignedIdentificationId: string;
    enabled: boolean;

    postalAddress: PostalAddress;
    tasksSchedule: TasksSchedule;

    constructor(restangular: Restangular) {
        this.restangular = restangular;
    }

    clone(): OrganizationModel {
        let copy = Object.assign({}, this);
        delete copy['restangular'];
        return copy;
    }

    save() {
        return this.restangular.put(this.clone());
    }
}

export class PostalAddress {
    streetName: string;
    citySubdivisionName: string;
    cityName: string;
    countrySubentity: string;
    district: string;
    countryIdentificationCode: string;

    constructor() {}
}

export class TasksSchedule {
    attempNumber: number;
    lapseTime: number;
    onErrorAttempNumber: number;
    onErrorLapseTime: number;

    delayTime: number;
    submitTime: Date;
    submitDays: number[];

    constructor() {}
}

export class TaxType {
    id: string;
    name: string;
    code: string;
    value: number;

    constructor() {}
}