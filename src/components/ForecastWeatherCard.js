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
    <div className=" border-b-2 last:border-b-0 p-2 ">
      <div className="flex gap-6 items-center ">
        <h1 className="flex-1 text-left">
          {moment.unix(data.time).format('dddd')}
        </h1>
        <div className="text-4xl">{getWeatherIcon(data.weather_icon)}</div>
        <h1 className="flex-1 text-right">
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
