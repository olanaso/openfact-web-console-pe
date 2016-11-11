import { Quantity } from './Quantity';
import { Period } from './Period';
import { PriceList } from './PriceList';
import { AllowanceCharge } from './AllowanceCharge';

export class Price {
    priceAmount: number;
    baseQuantity: Quantity;
    priceChangeReason: Array<String>;
    priceTypeCode: String;
    priceRepresentation: String;
    orderableUnitFactorRate: number;
    validityPeriod: Array<Period>;
    priceArray: PriceList;
    allowanceCharge: Array<AllowanceCharge>;
    id: String;
}