import { SignatureModel} from './signature-model';
import { SupplierPartyModel} from './supplier-party-model';
import {DiscrepancyResponseModel} from './discrepancy-responde-model';
import { CustomerPartyModel } from './customer-party-model';
import { QuantityModel } from './quantity-model';
import { ItemModel} from './item-model';
import { PriceModel, AlternativePriceModel} from './price-model';
import { TaxTotalModel} from './tax-total-model';
import { LegalMonetaryTotalModel} from './legal-monetary-total-model';
import { CodeTypeModel } from './code-type-model';
import { BillingReferenceModel } from './billing-reference-model';
export class DebitNoteModel {
    issueDate: Date;//fecha emision de la nota de debito
    signature: SignatureModel = new SignatureModel();//firma digital
    accountingSupplierParty: SupplierPartyModel = new SupplierPartyModel();//datos del emisor 
    discrepancyResponse: DiscrepancyResponseModel = new DiscrepancyResponseModel();
    ID: String;//serie y numero de nota de debito
    accountingCustomerParty: CustomerPartyModel = new CustomerPartyModel();//datos del cliente 
    creditNoteLine: DebitNoteLineModel = new DebitNoteLineModel();//detalle de documento
    taxTotal: Array<TaxTotalModel> = [];
    legalMonetaryTotal: LegalMonetaryTotalModel = new LegalMonetaryTotalModel();
    documentoCurrencyCode: CodeTypeModel = new CodeTypeModel();
    billingReferenceModel: BillingReferenceModel = new BillingReferenceModel();
}

export class DebitNoteLineModel {
    debitedQuantity: QuantityModel = new QuantityModel();
    item: ItemModel = new ItemModel();//denominacion del item
    price: PriceModel = new PriceModel();
    alternativePrice: AlternativePriceModel = new AlternativePriceModel();
    taxTotal: Array<TaxTotalModel> = [];
    lineExtensionAmount: number; // valor de venta por item sin deducir impuestos
    ID: String;
}



