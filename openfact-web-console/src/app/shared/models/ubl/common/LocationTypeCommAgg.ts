import { Period } from './Period';
import { Address } from './Address';

export class LocationTypeCommAgg {
    idUbl: String;
    description: String;
    conditions: String;
    countrySubentity: String;
    countrySubentityCode: String;
    validityPeriod: Array<Period>;
    address: Address;
    id: String;
}