import {SupplierPartyModel} from './supplier-party-model';
import { CodeTypeModel } from './code-type-model';
import {SignatureModel} from './signature-model';

export class VoidDocumentsModel {
    ID: String;
    accountingSupplierParty: SupplierPartyModel = new SupplierPartyModel();//datos del emisor 
    referenceDate: Date;//Fecha de generación del documento a dar de baja.
    signature: SignatureModel = new SignatureModel();//firma digital
    issueDate: Date;//fecha emision de la nota de credito
    voidDocumentsLine: VoidDocumentsLineModel = new VoidDocumentsLineModel();//detalle de documento
}

export class VoidDocumentsLineModel {
    lineId: String;
    voidDocumentTypeCode: CodeTypeModel = new CodeTypeModel();//tipo de documento
    documentSerialId: String;//serie del documento dado de baja
    documentNumberId: String;//numero correlativo del documento dado de baja
    voidReasonDescription: String;//motivo de baja
}