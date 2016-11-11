import { Quantity } from './Quantity';

export class DeliveryUnit {
    batchQuantity: Quantity;
    consumerUnitQuantity: Quantity;
    hazardousRiskIndicator: boolean;
    id: String;
}