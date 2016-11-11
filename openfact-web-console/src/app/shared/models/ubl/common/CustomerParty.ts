import { Party } from './Party';
import { Contact } from './Contact';

export class CustomerParty {
    customerAssignedAccountID: String;
    supplierAssignedAccountID: String;
    additionalAccountID: Array<String>;
    party: Party;
    deliveryContact: Contact;
    accountingContact: Contact;
    buyerContact: Contact;
    id: String;
}