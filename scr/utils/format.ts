// File: src/utils/format.ts
export const fmtCurrency = (v: number) =>
  `$${Math.round(v).toLocaleString()}`;

export const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
