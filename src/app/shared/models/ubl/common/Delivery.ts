import { Quantity } from './Quantity';
import { Address } from './Address';
import { LocationTypeCommAgg } from './LocationTypeCommAgg';
import { Period } from './Period';
import { Party } from './Party';
import { Despatch } from './Despatch';

export class Delivery {
    idUbl: String;
    quantity: Quantity;
    minimumQuantity: Quantity;
    maximumQuantity: Quantity;
    actualDeliveryDate: Date;
    actualDeliveryTime: Date;
    latestDeliveryDate: Date;
    latestDeliveryTime: Date;
    trackingID: String;
    deliveryAddress: Address;
    deliveryLocation: LocationTypeCommAgg;
    requestedDeliveryPeriod: Period;
    promisedDeliveryPeriod: Period;
    estimatedDeliveryPeriod: Period;
    deliveryParty: Party;
    despatch: Despatch;
    id: String;
}