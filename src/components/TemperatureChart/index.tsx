import classNames from 'classnames';
import type { IWeather } from '@/services/frontend';
import useTemperatureChart from '@/hooks/useTemperatureChart';

interface ITemperatureChartProps {
  className?: string;
  data: IWeather[];
}

const TemperatureChart = ({ data, className }: ITemperatureChartProps) => {
  useTemperatureChart('temperature-chart', data);

  return (
    <div
      id="temperature-chart"
      className={classNames('temperature-chart', { [className]: className })}
    />
  );
};

export default TemperatureChart;
