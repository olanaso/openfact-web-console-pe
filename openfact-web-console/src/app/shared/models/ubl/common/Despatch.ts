import { Address } from './Address';
import { Party } from './Party';
import { Contact } from './Contact';

export class Despatch {
    idUbl; String;
    requestedDespatchDate: Date;
    requestedDespatchTime: Date;
    estimatedDespatchDate: Date;
    estimatedDespatchTime: Date;
    actualDespatchDate: Date;
    actualDespatchTime: Date;
    despatchAddress: Address;
    despatchParty: Party;
    contact: Contact;
    id: String;
}