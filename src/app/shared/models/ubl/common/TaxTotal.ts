import { TaxSubtotal } from './TaxSubtotal';

export class TaxTotal {
    taxAmount: number;
    roundingAmount: number;
    taxEvidenceIndicator: boolean;
    taxSubtotal: Array<TaxSubtotal>;
    id: String;
}