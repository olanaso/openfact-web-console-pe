import { Measure } from './Measure';
import { TaxScheme } from './TaxScheme';

export class TaxCategory {
    idUbl: String;
    name: String;
    percent: number;
    baseUnitMeasure: Measure;
    perUnitAmount: number;
    taxExemptionReasonCode: String;
    taxExemptionReason: String;
    tierRange: String;
    tierRatePercent: number;
    taxScheme: TaxScheme;
    id: String;
}