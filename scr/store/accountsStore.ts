// File: src/store/accountsStore.ts
import create from 'zustand';
import { Account } from '../models/Account';
import { randomId } from '../utils/id';

type State = {
  accounts: Account[];
  inquiries: number;
  addAccount: (payload?: Partial<Account>) => void;
  updateBalance: (id: string, balance: number) => void;
  removeAccount: (id: string) => void;
  setInquiries: (n: number) => void;
  setAccountField: (id: string, patch: Partial<Account>) => void;
};

export const useAccountsStore = create<State>((set) => ({
  accounts: [
    {
      id: randomId('a_'),
      name: 'CNB Credit',
      type: 'credit',
      limit: 3000,
      balance: 2300,
      openedYears: 2,
      missedPayments: 0
    },
    {
      id: randomId('a_'),
      name: 'Auto Loan',
      type: 'installment',
      balance: 8000,
      openedYears: 3,
      missedPayments: 0
    }
  ],
  inquiries: 0,
  addAccount: (payload = {}) =>
    set((s) => ({
      accounts: [
        ...s.accounts,
        {
          id: randomId('a_'),
          name: payload.name ?? 'New Card',
          type: (payload.type as any) ?? 'credit',
          limit: payload.limit ?? 1000,
          balance: payload.balance ?? 0,
          openedYears: payload.openedYears ?? 0.5,
          missedPayments: payload.missedPayments ?? 0
        }
      ]
    })),
  updateBalance: (id, balance) =>
    set((s) => ({ accounts: s.accounts.map((a) => (a.id === id ? { ...a, balance: Math.max(0, balance) } : a)) })),
  removeAccount: (id) => set((s) => ({ accounts: s.accounts.filter((a) => a.id !== id) })),
  setInquiries: (n) => set({ inquiries: Math.max(0, n) }),
  setAccountField: (id, patch) =>
    set((s) => ({ accounts: s.accounts.map((a) => (a.id === id ? { ...a, ...patch } : a)) }))
}));
