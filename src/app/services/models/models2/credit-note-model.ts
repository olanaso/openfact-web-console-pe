import { SignatureModel} from './signature-model';
import { SupplierPartyModel} from './supplier-party-model';
import { CustomerPartyModel } from './customer-party-model';
import { CodeTypeModel } from './code-type-model';
import { TaxTotalModel} from './tax-total-model';
import { LegalMonetaryTotalModel} from './legal-monetary-total-model';
import { QuantityModel } from './quantity-model';
import { ItemModel} from './item-model';
import { PriceModel, AlternativePriceModel} from './price-model';
export class CreditNoteModel {
    issueDate: Date;//fecha emision de la nota de credito
    signature: SignatureModel = new SignatureModel();//firma digital
    accountingSupplierParty: SupplierPartyModel = new SupplierPartyModel();//datos del emisor 
    discrepancyResponseModel: DiscrepancyResponseModel = new DiscrepancyResponseModel();
    ID: String;//serie y numero de nota de credit
    accountingCustomerParty: CustomerPartyModel = new CustomerPartyModel();//datos del cliente 
    creditNoteLine: CreditNoteLine = new CreditNoteLine();//detalle de documento
    taxTotal: Array<TaxTotalModel> = [];
    legalMonetaryTotal: LegalMonetaryTotalModel = new LegalMonetaryTotalModel();
    documentoCurrencyCode: CodeTypeModel = new CodeTypeModel();
  
}
export class CreditNoteLine {


    creditedQuantityModel: QuantityModel = new QuantityModel();
    itemModel: ItemModel = new ItemModel();//denominacion del item
    priceModel: PriceModel = new PriceModel();
    alternativePriceModel: AlternativePriceModel = new AlternativePriceModel();
    taxTotal: Array<TaxTotalModel> = [];
    lineExtensionAmount: number; // valor de venta por item sin deducir impuestos
    ID: String;


}

export class DiscrepancyResponseModel {
    referenceId: String;//serie y numero de doc afectado
    responseCode: String;//tipo de codido de nota de credito
    description: String;//motivo o sustento de credito

}

export class BillingReference {
    ID: String; //serie y numero de doc que modifica
    DocumentTypeCode: String;//tipo de documento que modifica


}


