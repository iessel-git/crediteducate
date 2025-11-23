// File: src/models/Estimates.ts
export interface BureauEstimate {
  score: number;
  range: [number, number];
  breakdown: {
    utilization: number;
    payHist: number;
    avgAge: number;
    mixBonus: number;
    inquiries: number;
  };
}

export type Estimates = Record<string, BureauEstimate>;
