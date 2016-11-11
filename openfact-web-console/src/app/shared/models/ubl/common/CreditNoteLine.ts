import { Quantity } from './Quantity';
import { Response } from './Response';
import { LineReference } from './LineReference';
import { BillingReference } from './BillingReference';
import { DocumentReference } from './DocumentReference';
import { PricingReference } from './PricingReference';
import { Delivery } from './Delivery';
import { TaxTotal } from './TaxTotal';
import { Item } from './Item';
import { Price } from './Price';

export class CreditNoteLine {
    idUbl: String;
    UUID: String;
    note: String;
    creditedQuantity: Quantity;
    lineExtensionAmount: number;
    taxPointDate: Date;
    accountingCostCode: String;
    accountingCost: String;
    discrepancyResponse: Array<Response>;
    despatchLineReference: Array<LineReference>;
    receiptLineReference: Array<LineReference>;
    billingReference: Array<BillingReference>;
    documentReference: Array<DocumentReference>;
    pricingReference: PricingReference;
    delivery: Array<Delivery>;
    taxTotal: Array<TaxTotal>;
    item: Item;
    price: Price;
    id: String;
}