import { IBarChartItem } from "./Chart";

export interface IDatabaseSummarized {
  items: Array<IDatabaseItemSummarized> | undefined;
}

export interface IDatabaseItemSummarized {
  key: string;
  values: Array<IDatabaseItemSummaridedResult>;
  valuesChart: Array<IBarChartItem>;
}

export interface IDatabaseItemSummaridedResult {
  [key: string]: number;
}
