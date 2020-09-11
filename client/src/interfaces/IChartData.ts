import IChartDatasetInterface from "./IChartDataset";

export default interface IChartDataInterface {
  labels: Array<string>;
  datasets: Array<IChartDatasetInterface>;
};
