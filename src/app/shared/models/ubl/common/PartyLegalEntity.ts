import { Address } from './Address';
import { CorporateRegistrationScheme } from './CorporateRegistrationScheme';

export class PartyLegalEntity {
    registrationName: String;
    companyID: String;
    registrationAddress: Address;
    corporateRegistrationScheme: CorporateRegistrationScheme;
    id: String;
}