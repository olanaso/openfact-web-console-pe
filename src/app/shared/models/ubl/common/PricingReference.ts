import { ItemLocationQuantity } from './ItemLocationQuantity';
import { Price } from './Price';

export class PricingReference {
    originalItemLocationQuantity: ItemLocationQuantity;
    alternativeConditionPrice: Array<Price>;
    id: String;
}