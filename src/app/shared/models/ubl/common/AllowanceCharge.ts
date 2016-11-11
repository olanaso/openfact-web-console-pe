import { TaxCategory } from './TaxCategory';
import { TaxTotal } from './TaxTotal';
import { PaymentMeans } from './PaymentMeans';

export class AllowanceCharge {
    idUbl: String;
    chargeIndicator: boolean;
    allowanceChargeReasonCode: String;
    allowanceChargeReason: String;
    multiplierFactorNumeric: number;
    prepaidIndicator: boolean;
    sequenceNumeric: number;
    amount: number;
    baseAmount: number;
    accountingCostCode: String;
    accountingCost: String;
    taxCategory: Array<TaxCategory>;
    taxTotal: Array<TaxTotal>;
    paymentMeans: Array<PaymentMeans>;
    id: String;
}