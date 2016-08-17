import {Model} from './model'
import {Restangular} from '../restangular';
import {FileUploader} from "ng2-file-upload";

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
  public tasksSchedule: TasksSchedule;
  public certificate: Certificate;
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
  public  saveCertificate(certificate:Certificate){
    return this.restangular.all('certifieds').post(certificate);
  }

  public  uploadCertificate(){
    return this.restangular.all('certifieds').all("upload").post("");
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

export interface TasksSchedule {
  attempNumber: number;
  lapseTime: number;
  onErrorAttempNumber: number;
  onErrorLapseTime: number;

  delayTime: number;
  submitTime: Date;
  submitDays: number[];
}
export  interface  Certificate {
  alias: string;
  certificate: any;
  password: string;
  passwordConfirmation: string;
  validity: Date;
}
