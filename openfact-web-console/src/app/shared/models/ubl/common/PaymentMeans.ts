import { CardAccount } from './CardAccount';
import { FinancialAccount } from './FinancialAccount';
import { CreditAccount } from './CreditAccount';

export class PaymentMeans {
    idUbl: String;
    paymentMeansCode: String;
    paymentDueDate: Date;
    paymentChannelCode: String;
    instructionID: String;
    instructionNote: Array<String>;
    paymentID: Array<String>;
    cardAccount: CardAccount;
    payerFinancialAccount: FinancialAccount;
    payeeFinancialAccount: FinancialAccount;
    creditAccount: CreditAccount;
    id: String;
}