import { DefaultCurrencies } from './DefaultCurrencies';

export interface Exchange {
  fromCurrency: DefaultCurrencies;
  toCurrency: DefaultCurrencies;
  fromPrice: number;
  toPrice: number;
}
