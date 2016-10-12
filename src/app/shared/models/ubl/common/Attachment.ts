import { BinaryObject } from './BinaryObject';
import { ExternalReference } from './ExternalReference';

export class Attachment {
    embeddedDocumentBinaryObject: BinaryObject;
    externalReference: ExternalReference;
    id: String;
}