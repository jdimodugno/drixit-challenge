import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

/**
 * @class Api
 * It is an Axios Wrapper class
 */
export class Api {
  [x: string]: any;

  public constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
    });

    this.api.interceptors.response.use(this.success, this.error);

    this.get = this.get.bind(this);
  }

  /**
   * @param  {string} url
   * @param  {AxiosRequestConfig} config?
   * @returns Promise
   */
  public get<T, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.api.get(url, config);
  }

  /**
   * @param  {AxiosResponse<T>} response
   * @returns T
   */
  protected success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }

  /**
   * @param  {AxiosError<Error>} error
   */
  protected error(error: AxiosError<Error>) {
    throw error;
  }
}