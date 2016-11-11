import { Branch } from './Branch';
import { Country } from './Country';

export class FinancialAccount {
    idUbl: String;
    name: String;
    accountRepresentationCode: String;
    currencyCode: String;
    paymentNote: Array<String>;
    financialInstitutionBranch: Array<Branch>;
    country: Country;
    id: String;
}