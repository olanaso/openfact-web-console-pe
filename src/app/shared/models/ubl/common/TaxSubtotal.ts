import { Measure } from './Measure';
import { TaxCategory } from './TaxCategory';

export class TaxSubtotal {
    taxableAmount: number;
    taxAmount: number;
    calculationSequenceNumeric: number;
    transactionCurrencyTaxAmount: number;
    percent: number;
    baseUnitMeasure: Measure;
    perUnitAmount: number;
    tierRange: String;
    tierRatePercent: number;
    taxCategory: TaxCategory;
    id: String;
}