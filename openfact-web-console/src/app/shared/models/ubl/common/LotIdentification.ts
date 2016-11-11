import { ItemProperty } from './ItemProperty';

export class LotIdentification {
    lotNumberID: String;
    expiryDate: Date;
    additionalItemProperty: Array<ItemProperty>;
    id: String;
}