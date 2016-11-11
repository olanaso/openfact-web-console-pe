import { ItemProperty } from './ItemProperty';
import { LotIdentification } from './LotIdentification';

export class ItemInstance {
    productTraceID: String;
    manufactureDate: Date;
    manufactureTime: Date;
    registrationID: String;
    serialID: String;
    additionalItemProperty: Array<ItemProperty>;
    lotIdentification: LotIdentification;
    id: String;
}