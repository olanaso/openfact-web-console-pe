import { DocumentReference } from './DocumentReference';
import { BillingReferenceLine } from './BillingReferenceLine';

export class BillingReference {
    invoiceDocumentReference: DocumentReference;
    selfBilledInvoiceDocumentReference: DocumentReference;
    creditNoteDocumentReference: DocumentReference;
    selfBilledCreditNoteDocumentReference: DocumentReference;
    debitNoteDocumentReference: DocumentReference;
    reminderDocumentReference: DocumentReference;
    additionalDocumentReference: DocumentReference;
    billingReferenceLine: Array<BillingReferenceLine>;
    id: String;
}