import {Observable} from 'rxjs/Observable';

import {Model} from './model';
import {DocumentModel} from './document-model';

import {Restangular} from '../restangular';
import {Buildable, ObjectBuilder, ResponseToModel} from '../utils';

export class OrganizationModel extends Model implements Buildable {

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

    constructor(restangular?: Restangular) {
        super();
        this.restangular = restangular;
    }

    getDocuments(type: string): Observable<DocumentModel[]> {
        let restangular = this.restangular.all('documents');
        return restangular.get().map(
            result => ResponseToModel.toModels<DocumentModel>(result, restangular, new ObjectBuilder<DocumentModel>(DocumentModel), true)
        );
    }

}

export class PostalAddress {
    streetName: string;
    citySubdivisionName: string;
    cityName: string;
    countrySubentity: string;
    district: string;
    countryIdentificationCode: string;

    constructor() { }
}

export class TasksSchedule {
    attempNumber: number;
    lapseTime: number;
    onErrorAttempNumber: number;
    onErrorLapseTime: number;

    delayTime: number;
    submitTime: Date;
    submitDays: number[];

    constructor() { }
}

export class TaxType {
    id: string;
    name: string;
    code: string;
    value: number;

    constructor() { }
}