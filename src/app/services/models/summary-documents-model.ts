import {SupplierPartyModel} from './supplier-party-model';
import { CodeTypeModel } from './code-type-model';
import { TaxTotalModel} from './tax-total-model';
import {SignatureModel} from './signature-model';
export class SummaryDocumentsModel {
    accountingSupplierParty: SupplierPartyModel = new SupplierPartyModel();//datos del emisor 
    referenceDate: Date;//fecha de emision de los documentos
    issueDate: Date;//fecha de generacion de resmuen
    signature: SignatureModel = new SignatureModel();//firma digital
}

export class SummaryDocumentsLineModel {
    lineId: String;
    documentTypeCode: CodeTypeModel = new CodeTypeModel();//tipo de documento
    documentSerialId: String;
    starDocumentNumberId: number;
    endDocumentNumberId: number;
    billingReferenceModel: Array<BillingPaymentModel> = [];
    allowanceCharge: AllowanceCharge = new AllowanceCharge();
    taxTotal: Array<TaxTotalModel> = [];
    totalAmount: number;
}

export class BillingPaymentModel {
    paidAmount: String; //serie y numero de doc que modifica
    instructionId: String;//codigo de tipo de valir de venta
}

export class AllowanceCharge {
    chargeIndicator: string;
    amount: number;
}