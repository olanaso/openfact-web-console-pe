import { Party } from './Party';
import { Contact } from './Contact';

export class SupplierParty {
    customerAssignedAccountID: String;
    additionalAccountID: Array<String>;
    dataSendingCapability: String;
    party: Party;
    despatchContact: Contact;
    accountingContact: Contact;
    sellerContact: Contact;
    id: String;
}