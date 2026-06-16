export type QuestionKind =
  | "forcedChoice"
  | "singleChoice"
  | "multiChoice"
  | "ranking"
  | "firstReaction"
  | "hiddenReaction";

export type AnswerKind =
  | "left"
  | "right"
  | "both"
  | "neither"
  | "depends"
  | "skip"
  | "choice"
  | "multi"
  | "rank";

export type QuestionDomain =
  | "family"
  | "friendship"
  | "romance"
  | "idealPartner"
  | "preference"
  | "work"
  | "school"
  | "money"
  | "moral"
  | "stress"
  | "identity"
  | "daily";

export type CognitiveFunction = "Ni" | "Ne" | "Si" | "Se" | "Fi" | "Fe" | "Ti" | "Te";

export type StackRole =
  | "dominant"
  | "auxiliary"
  | "tertiary"
  | "inferior"
  | "opposing"
  | "critical"
  | "trickster"
  | "transformative";

export type MBTIType =
  | "INTJ" | "INFJ" | "ENTJ" | "ENFJ"
  | "INTP" | "INFP" | "ENTP" | "ENFP"
  | "ISTJ" | "ISFJ" | "ESTJ" | "ESFJ"
  | "ISTP" | "ISFP" | "ESTP" | "ESFP";

export type EnneagramType = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
export type Instinct = "sp" | "sx" | "so";

export type TypologySystem =
  | "cognitive"
  | "mbtiAxis"
  | "mbtiTypeSupport"
  | "mbtiStack"
  | "stackRole"
  | "shadowRole"
  | "enneagram"
  | "wing"
  | "instinct"
  | "tritype"
  | "socionics"
  | "quadra"
  | "temperament"
  | "classicalTemperament"
  | "bigFive"
  | "hexaco"
  | "attitudinalPsyche"
  | "disc"
  | "riasec"
  | "moral"
  | "decision"
  | "conflict"
  | "communication"
  | "relationship"
  | "stress"
  | "coreFear"
  | "coreDesire"
  | "values"
  | "work"
  | "learning"
  | "defense"
  | "idealPartner"
  | "loveStyle"
  | "environment"
  | "evidence"
  | "positive"
  | "negative";

export type ScoreMap = Partial<Record<string, number>>;

export type ScoreWeight = {
  cognitive?: Partial<Record<CognitiveFunction, number>>;
  stackRole?: Partial<Record<StackRole, number>>;
  mbtiAxis?: ScoreMap;
  mbtiTypeSupport?: Partial<Record<MBTIType, number>>;
  mbtiStack?: ScoreMap;
  shadowRole?: ScoreMap;
  enneagram?: Partial<Record<EnneagramType, number>>;
  wing?: ScoreMap;
  instinct?: Partial<Record<Instinct, number>>;
  tritype?: ScoreMap;
  socionics?: ScoreMap;
  quadra?: ScoreMap;
  temperament?: ScoreMap;
  classicalTemperament?: ScoreMap;
  bigFive?: ScoreMap;
  hexaco?: ScoreMap;
  attitudinalPsyche?: ScoreMap;
  disc?: ScoreMap;
  riasec?: ScoreMap;
  moral?: ScoreMap;
  decision?: ScoreMap;
  conflict?: ScoreMap;
  communication?: ScoreMap;
  relationship?: ScoreMap;
  stress?: ScoreMap;
  defense?: ScoreMap;
  values?: ScoreMap;
  work?: ScoreMap;
  learning?: ScoreMap;
  coreFear?: ScoreMap;
  coreDesire?: ScoreMap;
  idealPartner?: ScoreMap;
  loveStyle?: ScoreMap;
  environment?: ScoreMap;
  evidence?: ScoreMap;
  positive?: ScoreMap;
  negative?: ScoreMap;
  reliability?: number;
  ambiguity?: number;
  contradiction?: number;
};

export type QuestionOption = {
  id: string;
  text: string;
  subtleMeaning: string;
  weights: ScoreWeight;
};

export type QuestionItem = {
  id: string;
  kind: QuestionKind;
  context: {
    domain: QuestionDomain;
    pressureLevel: "low" | "medium" | "high" | "crisis";
    socialExposure: "private" | "semiPrivate" | "public";
    emotionalCharge: "low" | "medium" | "high";
  };
  prompt: string;
  instruction: string;
  options: QuestionOption[];
  left?: QuestionOption;
  right?: QuestionOption;
  maxSelect?: number;
  minSelect?: number;
  rankLimit?: number;
  reliability: number;
  targetSystems: TypologySystem[];
  coverageFocus?: TypologySystem[];
  batchTag?: string;
};

export type UserAnswer = {
  questionId: string;
  kind: QuestionKind;
  answerKind: AnswerKind;
  selectedOptionId?: string;
  selectedOptionIds?: string[];
  rankedOptionIds?: string[];
  side?: "left" | "right" | "both" | "neither" | "depends" | "skip";
  timestamp: number;
};

export type ScoreBucket = Record<string, number>;
export type RawScores = Record<TypologySystem, ScoreBucket> & {
  _meta: ScoreBucket;
};
export type NormalizedScores = Record<string, ScoreBucket>;

export type RankedScore = {
  key: string;
  score: number;
};

export type ConfidenceResult = {
  score: number;
  label: "lemah" | "sedang" | "cukup kuat" | "kuat" | "sangat kuat";
  reasons: string[];
};

export type MBTIResult = {
  top: MBTIType;
  topThree: RankedScore[];
  stackFit: RankedScore[];
};

export type EnneagramResult = {
  type: EnneagramType;
  wing: string;
  topThree: RankedScore[];
};

export type FinalResult = {
  summary: string;
  topMBTI: RankedScore[];
  cognitiveRanking: RankedScore[];
  stackFit: RankedScore[];
  functionRoles: Record<string, string>;
  shadowRoles: Record<string, string>;
  enneagram: EnneagramResult;
  wing: string;
  instinctStacking: RankedScore[];
  tritype: string;
  bigFive: RankedScore[];
  hexaco: RankedScore[];
  socionics: string;
  quadra: RankedScore[];
  temperament: RankedScore[];
  classicalTemperament: RankedScore[];
  attitudinalPsyche: RankedScore[];
  disc: RankedScore[];
  riasec: RankedScore[];
  moralStyle: RankedScore[];
  decisionStyle: RankedScore[];
  conflictStyle: RankedScore[];
  communicationStyle: RankedScore[];
  relationshipTendency: RankedScore[];
  stressResponse: RankedScore[];
  coreFear: RankedScore[];
  coreDesire: RankedScore[];
  valuesRanking: RankedScore[];
  workStyle: RankedScore[];
  learningStyle: RankedScore[];
  defensePattern: RankedScore[];
  idealPartnerTendency: RankedScore[];
  preferredLoveStyle: RankedScore[];
  preferredEnvironment: RankedScore[];
  confidence: ConfidenceResult;
  notes: string[];
  completedAt: string;
};

export type ShareCardData = {
  title: string;
  subtitle: string;
  topMBTI: string;
  enneagram: string;
  instinct: string;
  keywords: string[];
  confidence: string;
};

export type CoverageRequirement = {
  system: TypologySystem;
  minimumPoints: number;
  subMinimums?: Record<string, number>;
  description: string;
};

export type CoverageReport = {
  totals: Record<string, number>;
  bySystem: Record<string, Record<string, number>>;
  warnings: string[];
};
