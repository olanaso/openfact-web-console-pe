import {Model} from './model'
import {Restangular} from '../restangular/restangular';

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
  //public customer: CustomerModel;//CLIENTE 
  public totalTaxed: number;//TOTAL GRAVADO
  //public lines: Array<LinesModel>;

  public afectAmount: boolean;

  /*Constructor*/
  constructor(restangular: Restangular) {
    this.restangular = restangular;
  }

   public clone(): InvoiceModel {
        let copy = Object.assign({}, this);
        delete copy['restangular'];
        return copy;
    }

}
