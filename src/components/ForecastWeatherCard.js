import React from 'react';
import moment from 'moment';
import getWeatherIcon from '../utils/getWeatherIcon';

export default function ForecastWeatherCard({ data }) {
  return (
    <div className="border-b-2 last:border-0 p-2 lg:mx-auto lg:border-r-2 lg:border-b-0 ">
      <div className=" flex flex-row h-full w-full lg:flex-col justify-evenly ">
        <h1 className=" basis-1/3 flex justify-center items-center ">
          {moment.unix(data.time).utc().format('dddd')}
        </h1>
        <div className="text-3xl basis-1/3 lg:text-5xl flex justify-center items-center ">
          {getWeatherIcon(
            data.weather_id,
            data.time,
            data.sunRise,
            data.sunSet,
          )}
        </div>

        <h1 className=" basis-1/3 flex justify-center items-center ">
          {data.temp_min}° / {data.temp_max}°
        </h1>
      </div>
    </div>
  );
}
