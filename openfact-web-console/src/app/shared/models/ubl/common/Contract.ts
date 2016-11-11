import { DocumentReference } from './DocumentReference';

export class Contract {
    idUbl: String;
    issueDate: Date;
    issueTime: Date;
    contractRepresentationCode: String;
    contractRepresentation: String;
    PeriodvalidityPeriod: String;
    contractDocumentReference: Array<DocumentReference>;
    id: String;
}