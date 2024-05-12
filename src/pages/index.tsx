import AOS from 'aos';
import React, { useEffect, useMemo, useState } from 'react';
import { Card, Skeleton, Tooltip, HlImage, Table, Breadcrumb } from '@hankliu/hankliu-ui';
import DayJs from 'dayjs';
import {
  BulbOutlined,
  CloudOutlined,
  EnvironmentOutlined,
  FieldTimeOutlined,
  InfoCircleOutlined,
  LineChartOutlined,
} from '@hankliu/icons';
import classNames from 'classnames';
import LocationSelect from '@/components/LocationSelect';
import type { IWeatherData } from '@/services/frontend';
import { fetchWeather } from '@/services/frontend';
import { getRoutePrefix } from '@/utils/route';
import type { ColumnsType } from '@hankliu/hankliu-ui/lib/table';
import TemperatureChart from '@/components/TemperatureChart';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useBreadcrumb from '@/hooks/useBreadcrumb';

/**
 * 天气预报
 *
 * @returns
 */
export default function Index() {
  const [city, setCity] = useState<any>();
  const [fetching, setFetching] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<IWeatherData>();
  const router = useRouter();
  const onClickBreadcrumb = useBreadcrumb();

  const fetchFeatureWeather = async (cityName: string) => {
    setFetching(true);

    const response = await fetchWeather(cityName);
    setWeatherData(response);
    setFetching(false);
  };

  // 白天还是晚上Key
  const currentTimeKey = useMemo<string>(() => {
    return DayJs().isAfter(DayJs().set('hour', 18).set('minute', 18).set('second', 18))
      ? 'day'
      : 'night';
  }, [weatherData]);

  const featureWeatherColumns = useMemo<ColumnsType<any>>(() => {
    return [
      {
        title: '日期',
        dataIndex: 'date',
        key: 'date',
        sorter: (a, b) => (a.date > b.date ? 1 : -1),
      },
      {
        title: '天气',
        children: [
          {
            title: '白天',
            dataIndex: 'dayWeather',
            key: 'dayWeather',
          },
          {
            title: '夜晚',
            dataIndex: 'nightWeather',
            key: 'nightWeather',
          },
        ],
      },
      {
        title: '风向',
        children: [
          {
            title: '白天',
            dataIndex: 'dayWindDirection',
            key: 'dayWindDirection',
          },
          {
            title: '夜晚',
            dataIndex: 'nightWindDirection',
            key: 'nightWindDirection',
          },
        ],
      },
      {
        title: '风力',
        children: [
          {
            title: '白天',
            dataIndex: 'dayWindPower',
            key: 'dayWindPower',
          },
          {
            title: '夜晚',
            dataIndex: 'nightWindPower',
            key: 'nightWindPower',
          },
        ],
      },
      {
        title: '温度',
        children: [
          {
            title: '白天',
            dataIndex: 'dayTemp',
            key: 'dayTemp',
            sorter: (a, b) => parseInt(a.dayTemp) - parseInt(b.dayTemp),
          },
          {
            title: '夜晚',
            dataIndex: 'nightTemp',
            key: 'nightTemp',
            sorter: (a, b) => parseInt(a.nightTemp) - parseInt(b.nightTemp),
          },
        ],
      },
    ];
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative w-full text-white/75">
      {!!router.query?.['with-breadcrumb'] && (
        <Breadcrumb className="!m-6 !text-base" separator="/">
          <Breadcrumb.Item>
            <a onClick={onClickBreadcrumb}>小工具集合</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>天气预报</Breadcrumb.Item>
        </Breadcrumb>
      )}

      <div className="relative z-20 mx-auto mt-6 w-full max-w-[1920px]">
        <div className="flex flex-col flex-wrap">
          {/* 城市 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in"
          >
            <Card bordered className="relative shadow-lg">
              <Tooltip title="您的城市">
                <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                  <EnvironmentOutlined className="text-[20px] text-white" />
                </div>
              </Tooltip>
              <div className="relative grid grid-cols-1 gap-4 pt-4">
                <LocationSelect
                  disabled={fetching}
                  value={city}
                  onChange={(value, name) => {
                    setCity(value);

                    if (name && name.length) {
                      fetchFeatureWeather(name.pop());
                    }
                  }}
                />
              </div>
            </Card>
          </div>

          {/* 当天天气 */}
          {!!weatherData && (
            <div className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in">
              <Card bordered className="relative shadow-lg">
                <Tooltip title="当天天气">
                  <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded border-[2px] border-solid border-[#1677ff] bg-[#fff]">
                    <HlImage
                      className="weather-image"
                      errorImageUrl={`${getRoutePrefix()}/images/weather/night.png`}
                      width={25}
                      height={25}
                      src={`${getRoutePrefix()}/images/weather/${weatherData[`${currentTimeKey}Weather`]}.png`}
                      alt={weatherData[`${currentTimeKey}Weather`]}
                    />
                  </div>
                </Tooltip>
                <div className="relative flex flex-col pt-4">
                  {fetching ? (
                    <Skeleton className="w-full" active />
                  ) : (
                    <div className="mb-4 flex w-full flex-col">
                      <div className="mb-0">
                        <HlImage
                          className="weather-image"
                          errorImageUrl={`${getRoutePrefix()}/images/weather/night.png`}
                          width={80}
                          height={80}
                          src={`${getRoutePrefix()}/images/weather/${weatherData[`${currentTimeKey}Weather`]}.png`}
                          alt={weatherData[`${currentTimeKey}Weather`]}
                        />
                      </div>

                      <div className="mb-2 flex items-center justify-start text-lg">
                        <CloudOutlined className="text-lg" />
                        <div className="ml-[8px] font-semibold">天气：</div>
                        <div className="ml-[5px]">{weatherData[`${currentTimeKey}Weather`]}</div>
                      </div>

                      <div className="mb-2 flex items-center justify-start text-lg">
                        <EnvironmentOutlined className="text-lg" />
                        <div className="ml-[8px] font-semibold">地址：</div>
                        <div className="ml-[5px]">{weatherData.address}</div>
                      </div>

                      <div className="mb-2 flex items-center justify-start text-lg">
                        <BulbOutlined className="text-lg" />
                        <div className="ml-[8px] font-semibold">地址编码：</div>
                        <div className="ml-[5px]">{weatherData.cityCode}</div>
                      </div>

                      <div className="mb-2 flex items-center justify-start text-lg">
                        <FieldTimeOutlined className="text-lg" />
                        <div className="ml-[8px] font-semibold">更新时间：</div>
                        <div className="ml-[5px]">{weatherData.reportTime}</div>
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}

          {/* 未来天气 */}
          {!!weatherData && (
            <div className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in">
              <Card bordered className="relative shadow-lg">
                <Tooltip title="未来天气">
                  <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                    <CloudOutlined className="text-[20px] text-white" />
                  </div>
                </Tooltip>
                <div className="relative flex flex-col pt-4">
                  {fetching ? (
                    <Skeleton className="w-full" active />
                  ) : (
                    <div className="mb-4 flex w-full flex-col">
                      <Table
                        columns={featureWeatherColumns}
                        dataSource={weatherData?.forecasts || []}
                        bordered
                        size="middle"
                        key="date"
                        pagination={false}
                      />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          )}

          {/* 温度变化曲线 */}
          {!!weatherData && (
            <div className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in">
              <Card bordered className="relative shadow-lg">
                <Tooltip title="温度变化曲线">
                  <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                    <LineChartOutlined className="text-[20px] text-white" />
                  </div>
                </Tooltip>
                <div className="relative flex flex-col pt-4">
                  {fetching && <Skeleton className="w-full" active />}

                  <TemperatureChart
                    data={weatherData?.forecasts}
                    className={classNames({ hidden: fetching })}
                  />
                </div>
              </Card>
            </div>
          )}

          {/* 使用说明 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            className="info-card group relative flex w-full flex-col content-between justify-between gap-[24px] overflow-hidden rounded-[4px] p-[24px] ease-in"
          >
            <Card bordered className="relative shadow-lg">
              <Tooltip title="使用说明">
                <div className="absolute top-0 flex h-[40px] w-[40px] -translate-y-1/2 items-center justify-center rounded bg-[#1677ff]">
                  <InfoCircleOutlined className="text-[20px] text-white" />
                </div>
              </Tooltip>
              <div className="relative grid grid-cols-1 gap-4 pt-4">
                <div className="text-base">数据仅供娱乐，无事常备雨伞，总不会有错。</div>
                <div className="text-base">
                  当黄昏的余晖渐渐消逝，星空开始闪烁，天气预报仿佛是一位守护者，在黑夜降临之前，轻声呢喃着大自然的秘密，为我们揭开了星辰交错下的天象之谜。
                </div>
                <div className="text-base">没有伞的孩子只能努力奔跑。</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
