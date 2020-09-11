import IChartDataInterface from "../interfaces/IChartData";
import IStatistic from "../interfaces/IStatistic";
import { StatisticChartBarLabel } from '../presets/StatisticChartBarLabel';

/**
 * @class DataHelper
 * This class adapts the raw data to a chart compliant data.
 */
 export default class StatisticsChartData {
   
  /**
   * @param  {Array<IStatistic>} data
   * @param  {number} bars
   * @param  {Array<string>} colors
   * @returns IChartDataInterface
   */
  public static transformData(
    data: Array<IStatistic>,
    bars: number,
    colors: Array<string>
  ): IChartDataInterface {
    const chartData: IChartDataInterface = {
      labels: [],
      datasets: []
    };

    data.forEach((statistic: IStatistic) => {
      chartData.labels = [...chartData.labels, statistic.name];

      for (let index: number = 0; index < bars; index++) {
        const key = `bar${index + 1}`;
        chartData.datasets[index] = chartData.datasets[index] ? {
          ...chartData.datasets[index],
          data: [...chartData.datasets[index].data, statistic[key] as number]
        } : {
          label: StatisticChartBarLabel[key],
          backgroundColor: colors[index],
          data: [statistic[key] as number]
        }
      }
    });
    return chartData;
  }
}