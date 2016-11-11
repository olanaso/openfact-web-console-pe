import { Period } from './Period';

export class PaymentTerms {
    idUbl: String;
    paymentMeansID: String;
    prepaidPaymentReferenceID: String;
    note: Array<String>;
    referenceEventCode: String;
    settlementDiscountPercent: number;
    penaltySurchargePercent: number;
    amount: number;
    settlementPeriod: Period;
    penaltyPeriod: Period;
    id: String;
}