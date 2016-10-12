import { UBLExtensions } from './common/UBLExtensions';
import { Period } from './common/Period';
import { Response } from './common/Response';
import { OrderReference } from './common/OrderReference';
import { BillingReference } from './common/BillingReference';
import { DocumentReference } from './common/DocumentReference';
import { Signature } from './common/Signature';
import { SupplierParty } from './common/SupplierParty';
import { CustomerParty } from './common/CustomerParty';
import { Party } from './common/Party';
import { Delivery } from './common/Delivery';
import { DeliveryTerms } from './common/DeliveryTerms';
import { PaymentMeans } from './common/PaymentMeans';
import { PaymentTerms } from './common/PaymentTerms';
import { Payment } from './common/Payment';
import { ExchangeRate } from './common/ExchangeRate';
import { AllowanceCharge } from './common/AllowanceCharge';
import { TaxTotal } from './common/TaxTotal';
import { MonetaryTotal } from './common/MonetaryTotal';
import { InvoiceLine } from './common/InvoiceLine';

export class Invoice {
    ublExtensions: UBLExtensions;
    ublVersionID: String;
    customizationID: String;
    profileID: String;
    idUbl: String;
    copyIndicator: boolean;
    uuid: String;
    issueDate: Date;
    issueTime: Date;
    invoiceTypeCode: String;
    note: Array<String>;
    taxPointDate: Date;
    documentCurrencyCode: String;
    taxCurrencyCode: String;
    pricingCurrencyCode: String;
    paymentCurrencyCode: String;
    paymentAlternativeCurrencyCode: String;
    accountingCostCode: String;
    accountingCost: String;
    lineCountNumeric: number;
    invoicePeriod: Array<Period>;
    orderReference: OrderReference;
    billingReference: Array<BillingReference>;
    despatchDocumentReference: Array<DocumentReference>;
    receiptDocumentReference: Array<DocumentReference>;
    originatorDocumentReference: Array<DocumentReference>;
    contractDocumentReference: Array<DocumentReference>;
    additionalDocumentReference: Array<DocumentReference>;
    signature: Array<Signature>;
    accountingSupplierParty: SupplierParty;
    accountingCustomerParty: CustomerParty;
    payeeParty: Party;
    buyerCustomerParty: CustomerParty;
    sellerSupplierParty: SupplierParty;
    taxRepresentativeParty: Party;
    delivery: Array<Delivery>;
    deliveryTerms: DeliveryTerms;
    paymentMeans: Array<PaymentMeans>;
    paymentTerms: Array<PaymentTerms>;
    prepaidPayment: Array<Payment>;
    allowanceCharge: Array<AllowanceCharge>;
    taxExchangeRate: ExchangeRate;
    pricingExchangeRate: ExchangeRate;
    paymentExchangeRate: ExchangeRate;
    paymentAlternativeExchangeRate: ExchangeRate;
    taxTotal: Array<TaxTotal>;
    legalMonetaryTotal: MonetaryTotal;
    invoiceLine: Array<InvoiceLine>;
    id: String;
}