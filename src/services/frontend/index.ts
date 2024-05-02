import { message } from '@hankliu/hankliu-ui';
import fetch from 'isomorphic-fetch';

export interface IWeather {
  date: string;
  dayOfWeek: string;
  dayWeather: string;
  nightWeather: string;
  dayTemp: string;
  nightTemp: string;
  dayWindDirection: string;
  nightWindDirection: string;
  dayWindPower: string;
  nightWindPower: string;
}

export interface IWeatherData extends Partial<IWeather> {
  address: string;
  cityCode: string;
  reportTime: string;
  forecasts: IWeather[];
}

export interface IMxnzpResponse<T> {
  code: number;
  msg: string;
  data: T;
}

/**
 * 获取天气预报
 *
 * @returns
 */
export const fetchWeather = async (city: string): Promise<IWeatherData> => {
  return fetch<IMxnzpResponse<IWeatherData>>(
    `https://www.mxnzp.com/api/weather/forecast/${city}?app_id=${process.env.MXNZPAPI_KEY}&app_secret=${process.env.MXNZPAPI_SECRET}`,
    {
      method: 'GET',
    },
  )
    .then((response) => response.json())
    .then((data) => {
      const result: IWeatherData = data.data;

      if (data.data.forecasts && data.data.forecasts.length) {
        Object.assign(result, data.data.forecasts[0]);
      }
      return result;
    })
    .catch((error) => {
      console.log(error);
      message.error('请求数据失败');
    });
};
