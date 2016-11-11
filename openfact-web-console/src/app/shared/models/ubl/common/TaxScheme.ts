import { Address } from './Address';

export class TaxScheme {
    idUbl: String;
    name: String;
    taxCodeType: String;
    currencyCode: String;
    jurisdictionRegionAddress: Array<Address>;
    id: String;
}