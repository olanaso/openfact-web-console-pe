import { Customer } from './customer';
import { InvoiceDetails } from './invoiceDetails';

export class Invoice {
    public type: string;//tipo de documente -- BOLETA o FACTURA
    public id: string; // id del documento
    public totalDiscounted: number;//total descuento
    public totalUnaffected: number;//total inafecto
    public totalExonerated: number;//total exonerado
    public totalAmmount: number;//IMPORTE TOTAL
    public invoiceNumber: number;//NUMERO DE FACTURA
    public invoiceSet: number;// SERIE DE LA FACTURA
    public currencyCode: string;//MONEDA -- PEN USD
    public issueDate: Date;//fecha de la factura
    public totalByFree: number;//total CUANDO ES gratis
    public customer: Customer;//CLIENTE 
    public totalTaxed: number;//TOTAL GRAVADO
    public invoiceDetails: InvoiceDetails[];

    public afectAmount:boolean;
}