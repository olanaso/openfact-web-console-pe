import { Address } from './Address';
import { TaxScheme } from './TaxScheme';

export class PartyTaxScheme {
    registrationName: String;
    companyID: String;
    taxLevelCode: String;
    exemptionReasonCode: String;
    exemptionReason: String;
    registrationAddress: Address;
    taxScheme: TaxScheme;
    id: String;
}