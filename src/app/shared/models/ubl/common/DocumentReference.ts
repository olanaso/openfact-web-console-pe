import { Attachment } from './Attachment';

export class DocumentReference {
    idUbl: String;
    copyIndicator: boolean;
    UUID: String;
    issueDate: Date;
    documentCodeRepresentation: String;
    documentRepresentation: String;
    XPath: Array<String>;
    attachment: Attachment;
    id: String;
}