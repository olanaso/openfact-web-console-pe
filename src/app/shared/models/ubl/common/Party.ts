import { Language } from './Language';
import { Address } from './Address';
import { LocationTypeCommAgg } from './LocationTypeCommAgg';
import { PartyTaxScheme } from './PartyTaxScheme';
import { PartyLegalEntity } from './PartyLegalEntity';
import { Contact } from './Contact';
import { Person } from './Person';

export class Party {
    markCareIndicator: boolean;
    markAttentionIndicator: boolean;
    websiteURI: String;
    logoReferenceID: String;
    endpointID: String;
    partyIdentification: Array<String>;
    partyName: Array<String>;
    language: Language;
    postalAddress: Address;
    physicalLocation: LocationTypeCommAgg;
    partyTaxScheme: Array<PartyTaxScheme>;
    partyLegalEntity: Array<PartyLegalEntity>;
    contact: Contact;
    person: Person;
    agentParty: Party;
    id: String;
}