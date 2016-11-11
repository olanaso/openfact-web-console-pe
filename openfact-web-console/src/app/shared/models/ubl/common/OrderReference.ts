import { DocumentReference } from './DocumentReference';

export class OrderReference {
    idUbl: String;
    salesOrderID: String;
    copyIndicator: boolean;
    UUID: String;
    issueDate: Date;
    issueTime: Date;
    customerReference: String;
    documentReference: DocumentReference;
    id: String;
}