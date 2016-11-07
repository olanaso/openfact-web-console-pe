import { Measure } from './Measure';
import { Quantity } from './Quantity';
import { Address } from './Address';
import { Price } from './Price';
import { DeliveryUnit } from './DeliveryUnit';
import { TaxCategory } from './TaxCategory';

export class ItemLocationQuantity {
    leadTimeMeasure: Measure;
    minimumQuantity: Quantity;
    maximumQuantity: Quantity;
    hazardousRiskIndicator: boolean;
    tradingRestrictions: Array<String>;
    applicableTerritoryAddress: Array<Address>;
    price: Price;
    deliveryUnit: Array<DeliveryUnit>;
    applicableTaxCategory: Array<TaxCategory>;
    id: String;
}