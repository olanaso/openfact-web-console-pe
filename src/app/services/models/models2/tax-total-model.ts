import {CodeTypeModel} from './code-type-model';
export class TaxTotalModel {
    taxAmount: number;
    taxSubTotal: Array<TaxSubTotal> = [];
}
export class TaxSubTotal {
    taxAmount: number;
    taxCategory: TaxCategory = new TaxCategory();
}

export class TaxCategory {
    taxExemptionReasonCode: CodeTypeModel = new CodeTypeModel();
    taxScheme: TaxScheme = new TaxScheme();
    tierRange: String;

}
export class TaxScheme {
    id: String;
    name: String;
    taxTypeCode: String;
}
