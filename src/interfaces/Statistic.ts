export interface IDatabaseSummarized {
  items: Array<IDatabaseItemSummarized>;
}

export interface IDatabaseItemSummarized {
  key: string;
  values: Array<IDatabaseItemSummaridedResult>;
}

export interface IDatabaseItemSummaridedResult {
  [key: string]: number;
}
