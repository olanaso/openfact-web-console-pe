import { PhysicalAttribute } from './PhysicalAttribute';
import { Dimension } from './Dimension';
import { Party } from './Party';

export class ItemIdentification {
    idUbl: String;
    extendedID: String;
    physicalAttribute: Array<PhysicalAttribute>;
    measurementDimension: Array<Dimension>;
    issuerParty: Party;
    id: String;
}