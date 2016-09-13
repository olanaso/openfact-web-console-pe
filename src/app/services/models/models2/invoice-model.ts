
import {SignatureModel} from './signature-model';
import {SupplierPartyModel} from './supplier-party-model';
import { CustomerPartyModel } from './customer-party-model';
import { PartyModel } from './party-model';
import { ItemModel } from './item-model';
import { CodeTypeModel } from './code-type-model';
import { TaxTotalModel} from './tax-total-model';
import {LegalMonetaryTotalModel} from './legal-monetary-total-model'
import {QuantityModel} from './quantity-model'
import {PriceModel, AlternativePriceModel} from './price-model'
import {Model} from '../model';
import {Restangular} from '../../restangular';
import {Buildable, ObjectBuilder, ResponseToModel} from '../../utils';

export class InvoiceModel extends Model implements Buildable {
    id: String; // numero y serie de documento
    issueDate: Date;//fecha emision de la factura
    issueTime: Date;// fecha 
    dueDate: Date;//fecha de vencimiento
    signature: SignatureModel = new SignatureModel();//firma digital
    accountingSupplierParty: SupplierPartyModel = new SupplierPartyModel();//datos del emisor 
    invoiceTypeCode: CodeTypeModel = new CodeTypeModel();//tipo de documento 

    accountingCustomerParty: CustomerPartyModel = new CustomerPartyModel();//datos del cliente 
    invoiceLine: Array<InvoiceLineModel> = [];//detalle de documento
    taxTotal: Array<TaxTotalModel> = [];
    legalMonetaryTotal: LegalMonetaryTotalModel = new LegalMonetaryTotalModel();
    documentCurrencyCode: CodeTypeModel = new CodeTypeModel();

}


export class InvoiceLineModel {
    invoiceQuantityModel: QuantityModel = new QuantityModel();
    itemModel: ItemModel = new ItemModel();//denominacion del item
    priceModel: PriceModel = new PriceModel();
    alternativePriceModel: AlternativePriceModel = new AlternativePriceModel();
    taxTotal: Array<TaxTotalModel> = [];
    lineExtensionAmount: number; // valor de venta por item sin deducir impuestos
    id: String;
}













// export class CustomerPartyModel {

// }
