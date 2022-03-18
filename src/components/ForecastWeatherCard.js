import React from 'react';
import moment from 'moment';
import {
  WiDaySunny,
  WiCloudy,
  WiCloud,
  WiNightClear,
  WiDaySunnyOvercast,
  WiDayShowers,
  WiDayRainWind,
  WiDaySnow,
  WiDayThunderstorm,
  WiMoonAltNew,
} from 'react-icons/wi';

export default function ForecastWeatherCard({ data }) {
  return (
    <div className="border-b-2 last:border-0 p-2  lg:mx-auto   lg:border-r-2 lg:border-b-0  ">
      <div className=" flex flex-row  h-full w-full lg:flex-col justify-evenly ">
        <h1 className=" basis-1/3 flex justify-center items-center ">
          {moment.unix(data.time).utc().format('dddd')}
        </h1>
        <div className="text-3xl basis-1/3 lg:text-5xl flex justify-center items-center  ">
          {getWeatherIcon(data.weather_icon)}
        </div>

        <h1 className="  basis-1/3 flex justify-center items-center ">
          {data.temp_min}° / {data.temp_max}°
        </h1>
      </div>
    </div>
  );
}

function getWeatherIcon(icon) {
  let timeOfDay = icon.slice(-1);
  let typeOfWeather = icon.slice(0, 2);

  if (timeOfDay === 'd') {
    switch (typeOfWeather) {
      case '01':
        return <WiDaySunny />;
      case '02':
        return <WiDaySunnyOvercast />;
      case '03':
        return <WiCloud />;
      case '04':
        return <WiCloudy />;
      case '09':
        return <WiDayShowers />;
      case '10':
        return <WiDayRainWind />;
      case '11':
        return <WiDayThunderstorm />;
      case '13':
        return <WiDaySnow />;
      case '50':
        return <WiNightClear />;
      default:
        return <WiDaySunny />;
    }
  } else if (timeOfDay === 'n') {
    switch (typeOfWeather) {
      default:
        return <WiMoonAltNew />;
    }
  }
}
