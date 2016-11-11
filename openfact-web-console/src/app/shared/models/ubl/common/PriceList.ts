import { Period } from './Period';

export class PriceList {
    idUbl: String;
    statusCode: String;
    validityPeriod: Array<Period>;
    previousPriceList: PriceList;
    id: String;
}