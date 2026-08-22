/** where a company currently sits in the process */
export type PipelineStage =
  | "applied"
  | "oa"
  | "phone screen"
  | "onsite"
  | "offer"
  | "rejected";

export type PipelineEntry = {
  id: string;
  company: string;
  role: string;
  stage: PipelineStage;
  /** ISO `YYYY-MM-DD` — when this last moved */
  updated: string;
  /** ISO `YYYY-MM-DD` — an OA deadline or a scheduled interview */
  due?: string;
  /** private, never leaves your machine */
  notes?: string;
};
