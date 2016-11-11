import { Period } from './Period';
import { ItemPropertyGroup } from './ItemPropertyGroup';

export class ItemProperty {
    name: String;
    value: String;
    usabilityPeriod: Period;
    itemPropertyGroup: Array<ItemPropertyGroup>;
    id: String;
}