import type { MBTIType } from "../types";

export const MBTI_STACKS: Record<MBTIType, string[]> = {
  INTJ: ["Ni", "Te", "Fi", "Se"],
  INFJ: ["Ni", "Fe", "Ti", "Se"],
  ENTJ: ["Te", "Ni", "Se", "Fi"],
  ENFJ: ["Fe", "Ni", "Se", "Ti"],
  INTP: ["Ti", "Ne", "Si", "Fe"],
  INFP: ["Fi", "Ne", "Si", "Te"],
  ENTP: ["Ne", "Ti", "Fe", "Si"],
  ENFP: ["Ne", "Fi", "Te", "Si"],
  ISTJ: ["Si", "Te", "Fi", "Ne"],
  ISFJ: ["Si", "Fe", "Ti", "Ne"],
  ESTJ: ["Te", "Si", "Ne", "Fi"],
  ESFJ: ["Fe", "Si", "Ne", "Ti"],
  ISTP: ["Ti", "Se", "Ni", "Fe"],
  ISFP: ["Fi", "Se", "Ni", "Te"],
  ESTP: ["Se", "Ti", "Fe", "Ni"],
  ESFP: ["Se", "Fi", "Te", "Ni"]
};

export const ENNEAGRAM_WINGS: Record<string, string[]> = {
  "1": ["9", "2"],
  "2": ["1", "3"],
  "3": ["2", "4"],
  "4": ["3", "5"],
  "5": ["4", "6"],
  "6": ["5", "7"],
  "7": ["6", "8"],
  "8": ["7", "9"],
  "9": ["8", "1"]
};

export const TRITYPE_CENTERS = {
  heart: ["2", "3", "4"],
  head: ["5", "6", "7"],
  gut: ["8", "9", "1"]
};

export const COVERAGE_MINIMUMS: Record<string, number> = {
  cognitive: 320,
  mbtiAxis: 200,
  stackRole: 240,
  enneagram: 270,
  bigFive: 250,
  hexaco: 300,
  attitudinalPsyche: 240,
  riasec: 240,
  relationship: 240,
  stress: 240,
  defense: 240,
  values: 240,
  disc: 200,
  moral: 200,
  decision: 200,
  conflict: 200,
  communication: 200,
  work: 200,
  learning: 200,
  idealPartner: 200,
  loveStyle: 200,
  environment: 200,
  instinct: 200,
  tritype: 200,
  coreFear: 200,
  coreDesire: 200
};
