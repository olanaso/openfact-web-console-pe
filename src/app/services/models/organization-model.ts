import {URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Model} from './model';
import {DocumentModel} from './document-model';

import {Restangular} from '../restangular';
import {FileUploader} from "ng2-file-upload";
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
  public postalAddress: PostalAddress;
  public tasksSchedule: TasksSchedule;
  public certificate: Certificate;
  /*Constructor*/
  constructor(restangular: Restangular) {
    this.restangular = restangular;
  }

    getDocuments(type: string): Observable<DocumentModel[]> {
        let restangular = this.restangular.all('documents');
        
        let queryParams = new URLSearchParams();
        queryParams.append("type", type);       

        return restangular.get(queryParams)
            .map(result => ResponseToModel.toModels<DocumentModel>(result, restangular, new ObjectBuilder<DocumentModel>(DocumentModel), true));
    }

  public save() {
    return this.restangular.put(this.clone());
  }
  public  saveCertificate(certificate:Certificate){
    return this.restangular.all('certifieds').post(certificate);
  }

  public  uploadCertificate(){
    return this.restangular.all('certifieds').all("upload").post("");
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
  password: string;
  passwordConfirmation: string;
  validity: Date;
}
