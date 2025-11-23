// File: src/estimator/scoreEngine.ts
import { Account } from '../models/Account';
import { Estimates } from '../models/Estimates';

/*
  Simple, transparent estimator.
  Replace with tuned weights later. Pure functions -> testable.
*/

export function estimateScores(accounts: Account[], inquiries = 0): Estimates {
  const revolving = accounts.filter(a => a.type === 'credit');
  const installment = accounts.filter(a => a.type !== 'credit');

  const totalLimit = Math.max(1, revolving.reduce((s, a) => s + (a.limit || 0), 0));
  const totalBal = revolving.reduce((s, a) => s + a.balance, 0);
  const utilization = Math.min(100, (totalBal / totalLimit) * 100);

  const totalMisses = accounts.reduce((s, a) => s + (a.missedPayments || 0), 0);
  const payHist = Math.max(0, 100 - totalMisses * 10);

  const avgAge =
    accounts.length > 0
      ? accounts.reduce((s, a) => s + (a.openedYears || 2), 0) / accounts.length
      : 2;
  const ageScore = Math.min(100, (avgAge / 10) * 100);

  const mixBonus = Math.min(20, (installment.length > 0 ? 10 : 0) + (revolving.length > 1 ? 10 : 0));
  const inquiryPenalty = Math.min(10, inquiries * 2);

  const weighted =
    300 +
    payHist * 0.45 +
    (100 - utilization) * 0.3 +
    ageScore * 0.1 +
    mixBonus * 0.8 -
    inquiryPenalty * 1.5;

  const bureaus = ['TransUnion', 'Equifax', 'Experian'] as const;

  const results: Estimates = {} as Estimates;

  bureaus.forEach((b, i) => {
    const bias = i === 0 ? -5 : i === 1 ? -2 : 3;
    const score = Math.round(Math.max(300, Math.min(850, weighted + bias)));
    const spread = Math.round(Math.max(8, Math.abs((utilization - 30) * 0.5) + totalMisses * 3));
    results[b] = {
      score,
      range: [Math.max(300, score - spread), Math.min(850, score + spread)],
      breakdown: {
        utilization: Math.round(utilization),
        payHist,
        avgAge: Number(avgAge.toFixed(1)),
        mixBonus,
        inquiries
      }
    };
  });

  return results;
}
