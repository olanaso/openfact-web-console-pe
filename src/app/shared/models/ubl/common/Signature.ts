import { Party } from './Party';
import { Attachment } from './Attachment';
import { DocumentReference } from './DocumentReference';

export class Signature {
    idUbl: String;
    note: String;
    validationDate: Date;
    validationTime: Date;
    validatorID: String;
    canonicalizationMethod: String;
    signatureMethod: String;
    signatoryParty: Party;
    digitalSignatureAttachment: Attachment;
    originalDocumentReference: DocumentReference;
    id: String;
}