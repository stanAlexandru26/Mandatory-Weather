import React, { useState, useEffect } from 'react';
import getWeatherIcon from '../utils/getWeatherIcon';
import moment from 'moment';
import {
  ComposedChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

export default function WeatherGraph({ data }) {
  const [chartData, setChartData] = useState();

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
          className=" bg-secondary hover:drop-shadow-lg rounded-xl text-sm px-2 py-2 mb-2 "
          onClick={handleInputChange}
        >
          {chartData === data.hourlyChartData
            ? 'Change to Daily Graph'
            : 'Change to Hourly Graph'}
        </button>
      </div>
      <div>
        <ResponsiveContainer aspect={1.85 / 1}>
          <ComposedChart data={chartData}>
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#2b6cb0"
              fill="url(#temp)"
            />
            <defs>
              <linearGradient id="temp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#2b6cb0" stopOpacity={1} />
                <stop offset="25%" stopColor="#2b6cb0" stopOpacity={0.75} />
                <stop offset="50%" stopColor="#2b6cb0" stopOpacity={0.5} />
                <stop offset="75%" stopColor="#2b6cb0" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#2b6cb0" stopOpacity={0.01} />
              </linearGradient>
            </defs>
            <XAxis dataKey="xAxis" minTickGap={35} />
            <YAxis
              dataKey="temp"
              domain={['dataMin - 1', 'dataMax + 1']}
              margin={{ top: 0, bottom: 20 }}
            />
            <YAxis
              yAxisId={1}
              dataKey="temp"
              orientation="right"
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            <Tooltip content={<CustomTooltip />} />
            <ReferenceLine y={0} stroke="#2b6cb0" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

const CustomTooltip = ({ active, payload }) => {
  if (active) {
    return (
      <div className="">
        <div className="bg-primary rounded-lg p-2 flex border-2 flex-col items-center justify-center ">
          <p className="label">{`${moment
            .unix(payload[0].payload.time)
            .utc()
            .format('dddd,hh a')}`}</p>
          <p className="text-xl font-bold">{`${payload[0].payload.temp}°`}</p>
          <div className="text-3xl">
            {getWeatherIcon(
              payload[0].payload.weather_id,
              payload[0].payload.time,
              payload[0].payload.sunRise,
              payload[0].payload.sunSet,
            )}
          </div>
          <p className="label">{`${payload[0].payload.weather_description}`}</p>
        </div>
      </div>
    );
  }

  return null;
};
