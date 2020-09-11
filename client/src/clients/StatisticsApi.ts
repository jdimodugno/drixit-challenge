import { Api } from '../utils/Api';
import IStatistic from '../interfaces/IStatistic';

export default class StatisticsApi extends Api {
  private readonly ENDPOINT: string;

  constructor () {
    super();
    this.ENDPOINT = '/statistics';
  }
  
  public read(): Promise<Array<IStatistic>> {
    return this.get(this.ENDPOINT);
  }
}