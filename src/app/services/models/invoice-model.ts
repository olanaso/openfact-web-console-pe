import {Model} from './model'

import {Restangular} from '../restangular';
import {Buildable, ObjectBuilder, ResponseToModel} from '../utils';

export class InvoiceModel extends Model implements Buildable {

  id: string; // id del documento
  type: string;//tipo de documente -- BOLETA o FACTURA   
  totalDiscounted: number;//total descuento
  totalUnaffected: number;//total inafecto
  totalExonerated: number;//total exonerado
  totalAmmount: number;//IMPORTE TOTAL
  invoiceNumber: number;//NUMERO DE FACTURA
  invoiceSet: number;// SERIE DE LA FACTURA
  currencyCode: string;//MONEDA -- PEN USD
  issueDate: Date;//fecha de la factura
  totalByFree: number;//total CUANDO ES gratis
  totalIgvTax: number;
  totalTaxed: number;//TOTAL GRAVADO
  customer: CustomerModel = new CustomerModel();//CLIENTE 
  lines: Array<LineModel> = [];

  constructor(restangular?: Restangular) {
    super();
    this.restangular = restangular;
  }

}

export class CustomerModel {
  id: string
  assignedIdentificationId: string // NUMERO DE DOCUMENTO.
  additionalAccountId: string //TIPO DE DOCUMENTO -- RUC O DNI
  registrationName: string // RAZON SOCIAL DE LA EMPRESA
  email: string;//CORREO ELECTRONICO DEL CLIENTE

  constructor() { }
}

export class LineModel {

  id: number;
  orderNumber: number;
  quantity: number = 0;
  unitCode: string;
  itemDescription: string;
  itemIdentification: string;
  price: number = 0;
  ammount: number = 0;
  igv: number = 0;
  isc: number;
  othertaxs: number;
  allowanceCharge: number;

  constructor() { }

  getExtensionAmmount(): number {
    return this.quantity * this.ammount;
  }

}