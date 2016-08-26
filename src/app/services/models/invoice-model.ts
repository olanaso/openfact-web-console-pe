import {Model} from './model';
import {Observable} from 'rxjs/Observable';

import {Restangular} from '../restangular';
import {Buildable, ObjectBuilder, ResponseToModel} from '../utils';

export class InvoiceModel extends Model implements Buildable {

  id: string; // id del documento
  type: string;//tipo de documente -- BOLETA o FACTURA   
  totalDiscounted: number;//total descuento
  //totalUnaffected: number;//total inafecto
  //totalExonerated: number;//total exonerado
  totalAmmount: number;//IMPORTE TOTAL
  invoiceNumber: number;//NUMERO DE FACTURA
  invoiceSet: number;// SERIE DE LA FACTURA
  currencyCode: string;//MONEDA -- PEN USD
  issueDate: Date;//fecha de la factura
  //totalByFree: number;//total CUANDO ES gratis
  totalIgvTax: number;
  //totalTaxed: number;//TOTAL GRAVADO
  customer: CustomerModel = new CustomerModel();//CLIENTE 
  lines: Array<LineModel> = [];

  additionalInformation:Array<AdditionalInformationModel> = [];
  totalTaxs: Array<TotalTaxModel> = [];

  constructor(restangular?: Restangular) {
    super();
    this.restangular = restangular;
  }

  getLines(): Observable<LineModel[]> {
    let restangular = this.restangular.all('lines');
    return restangular.get()
      .map(result => ResponseToModel.toModels<LineModel>(result, restangular, new ObjectBuilder<LineModel>(LineModel), true));
  }
}

export class CustomerModel {
  id: string
  assignedIdentificationId: string // NUMERO DE DOCUMENTO.
  //additionalAccountId: string //TIPO DE DOCUMENTO -- RUC O DNI
  additionalIdentificationId:string;
  registrationName: string // RAZON SOCIAL DE LA EMPRESA
  email: string;//CORREO ELECTRONICO DEL CLIENTE
  constructor() { }
}

export class LineModel extends Model implements Buildable {

  id: number;
  orderNumber: number;
  quantity: number = 0;
  unitCode: string;
  itemDescription: string;
  itemIdentification: string;
  price: number = 0;
  amount: number = 0;
  // igv: number = 0;
  // isc: number;
  // othertaxs: number;
  allowanceCharge: number;
  ammountExtension: number;
  totalTaxs: Array<TotalTaxModel> = [];
  constructor(restangular?: Restangular) {
    super();
    this.restangular = restangular;
  }
  getExtensionAmmount(): number {
    return this.quantity * this.amount;
  }
}

export class AdditionalInformationModel {
  name: string;
  amount: number;
  constructor() { }
}

export class TotalTaxModel {
  document: string;
  reason: string;
  amount: number;
  //auxiliar
  checked: boolean;
  constructor() { }
}

export class TypeIgv {
  document: string;
  name: string;
  value: string;
  checked: boolean;
}