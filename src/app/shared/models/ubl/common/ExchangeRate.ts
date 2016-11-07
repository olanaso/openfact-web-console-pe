import { Contract } from './Contract';

export class ExchangeRate {
    sourceCurrencyCode: String;
    sourceCurrencyBaseRate: number;
    targetCurrencyCode: String;
    targetCurrencyBaseRate: number;
    exchangeMarketID: String;
    calculationRate: number;
    mathematicOperatorCode: String;
    date: Date;
    foreignExchangeContract: Contract;
    id: String;
}