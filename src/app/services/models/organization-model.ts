import {URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {FileUploader} from "ng2-file-upload";

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

        let queryParams = new URLSearchParams();
        queryParams.append("type", type);

        return restangular.get(queryParams)
            .map(result => ResponseToModel.toModels<DocumentModel>(result, restangular, new ObjectBuilder<DocumentModel>(DocumentModel), true));
    }

    public saveCertificate(certificate: Certificate) {
        return this.restangular.all('certifieds').post(certificate);
    }

    public uploadCertificate(): FileUploader {
        let URL = this.restangular.all('certifieds').all("upload").path;
        return new FileUploader({ url: URL, queueLimit: 1 });
    }

    public getCertificate() {
        let restangular = this.restangular.all('certifieds').all("searchEnabled");
        return restangular.get().map(result => result.json());

    }

    public getCetificateFile() {
        let restangular = this.restangular.all('certifieds').all("searchCertificate");
        return restangular.get().map(result => result.blob());
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

export  interface  Certificate {
  alias: string;
  certificate: any;
  urlcertificate: string;
  fileName: string;
  fileType: string;
  password: string;
  passwordConfirmation: string;
  validity: Date;
  hasCertificate: boolean;
}