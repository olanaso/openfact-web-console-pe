import { FinancialInstitution } from './FinancialInstitution';
import { Address } from './Address';

export class Branch {
    idUbl: String;
    name: String;
    financialInstitution: FinancialInstitution;
    address: Address;
    id: String;
}