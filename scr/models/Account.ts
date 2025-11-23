// File: src/models/Account.ts
export type AccountType = 'credit' | 'installment' | 'mortgage';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  limit?: number; // for revolving
  balance: number;
  openedYears?: number;
  missedPayments?: number;
}
