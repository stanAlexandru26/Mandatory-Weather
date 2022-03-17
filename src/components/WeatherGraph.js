/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import {
  AreaChart,
  Area,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

export default function WeatherGraph({ data }) {
  const [chartData, setChartData] = React.useState();

  const handleInputChange = () => {
    if (chartData === data.hourlyChartData) {
      setChartData(data.dailyChartData);
    } else {
      setChartData(data.hourlyChartData);
    }
  };

  useEffect(() => {
    if (chartData === data.hourlyChartData) {
      setChartData(data.hourlyChartData);
    } else if (chartData === data.dailyChartData) {
      setChartData(data.dailyChartData);
    } else {
      setChartData(data.hourlyChartData);
    }
  }, [data]);
  return (
    <div>
      <div>
        <button
          className=" bg-secondary hover:drop-shadow-lg rounded-xl   text-sm px-2 py-1 mb-2 "
          onClick={handleInputChange}
        >
          {chartData === data.hourlyChartData
            ? 'Change to Daily Graph'
            : 'Change to Hourly Graph'}
        </button>
      </div>
      <div>
        <LineChart width={600} height={300} data={chartData}>
          <Line type="monotone" dataKey="temp" />
          <Line type="monotone" dataKey="weather_description" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}
