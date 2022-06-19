export interface IBarChart {
  data: Array<any>;
  labelProperty: string;
  mainConfig: IBarChartConfig;
  secondConfig?: IBarChartConfig;
}

export interface IBarChartConfig {
  legend: string;
  backgroundColor: string;
  valueProperty: string;
}

export interface IBarChartItem {
  key: string;
  value: number;
}
