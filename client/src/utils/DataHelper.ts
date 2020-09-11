import IStatistic from "../interfaces/IStatistic";

/**
 * @class DataHelper
 * It provides data related functions.
 */
export default class DataHelper {
  /**
   * @param  {Array<IStatistic>} data
   * @param  {string} orderField
   * @param  {boolean} orderByFieldAsc
   * @param  {string} filter
   * @returns Array
   */
  public static ComputeFilterAndSorting(
    data: Array<IStatistic>,
    orderField: string,
    orderByFieldAsc: boolean,
    filter: string,
  ): Array<IStatistic> {
    return data
      .filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => {
        if (!orderField) return 1;
        const left = orderByFieldAsc ? 1 : -1;
        const right = -1 * left;
        return a[orderField] > b[orderField] ? left : right;
      });
  }
  /**
   * @param  {Array<IStatistic>} data
   * @returns void
   */
  public static ExportDataToCSV(
    data: Array<IStatistic>,
  ): void {
    const csvHeader: string = 'data:text/csv;charset=utf-8,';
    const csvBody: string = data
      .map(({ username, ...result }) => Object.values(result).join(';')).join('\n');
    const csv: string = `${csvHeader}${csvBody}`;
    window.open(encodeURI(csv));
  }
}