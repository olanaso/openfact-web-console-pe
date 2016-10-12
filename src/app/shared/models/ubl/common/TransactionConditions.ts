import { DocumentReference } from './DocumentReference';

export class TransactionConditions {
    idUbl: String;
    actionCode: String;
    description: Array<String>;
    documentReference: Array<DocumentReference>;
    id: String;
}