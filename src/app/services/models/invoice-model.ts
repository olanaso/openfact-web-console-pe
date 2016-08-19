import {Model} from './model'
import {Restangular} from '../restangular';

export class InvoiceModel implements Model {

  /*Restangular*/
  restangular: Restangular;

  /*Attributes*/
  public id: string; // id del documento
  public type: string;//tipo de documente -- BOLETA o FACTURA   
  public totalDiscounted: number;//total descuento
  public totalUnaffected: number;//total inafecto
  public totalExonerated: number;//total exonerado
  public totalAmmount: number;//IMPORTE TOTAL
  public invoiceNumber: number;//NUMERO DE FACTURA
  public invoiceSet: number;// SERIE DE LA FACTURA
  public currencyCode: string;//MONEDA -- PEN USD
  public issueDate: Date;//fecha de la factura
  public totalByFree: number;//total CUANDO ES gratis
  public customer: CustomerModel;//CLIENTE 
  public totalIgvTax: number;
  public totalTaxed: number;//TOTAL GRAVADO
  public lines: Array<LineModel>;

  /*Constructor*/
  constructor(restangular: Restangular) {
    this.restangular = restangular;
    this.customer = new CustomerModel();
    this.lines = [];
  }

  public clone(): InvoiceModel {
    let copy = Object.assign({}, this);
    delete copy['restangular'];
    return copy;
  }

}

export class CustomerModel {
  id: string
  assignedIdentificationId: string // NUMERO DE DOCUMENTO.
  additionalAccountId: string //TIPO DE DOCUMENTO -- RUC O DNI
  registrationName: string // RAZON SOCIAL DE LA EMPRESA
  email: string;//CORREO ELECTRONICO DEL CLIENTE

  constructor() {}
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