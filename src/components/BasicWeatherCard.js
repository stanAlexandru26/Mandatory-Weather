import React from 'react';
import {
  WiDaySunny,
  WiCloudy,
  WiCloud,
  WiNightCloudy,
  WiNightClear,
  WiDaySunnyOvercast,
  WiDayShowers,
  WiDayRainWind,
  WiDaySnow,
  WiDayThunderstorm,
  WiNightPartlyCloudy,
  WiNightRainWind,
  WiNightThunderstorm,
  WiNightSnow,
  WiNightFog,
} from 'react-icons/wi';

export default function BasicWeatherCard({
  data,
  setShowWeatherGraph,
  showWeatherGraph,
}) {
  return (
    <div className="m-auto bg-primary p-5 rounded-xl drop-shadow-lg  ">
      <div>
        <h1 className="text-2xl font-semibold tracking-wide dark:text-primary">
          {data.city}, {data.country}
        </h1>
        <h2 className="tracking-wide text-secondary">
          {data.time}, {data.weather_description}
        </h2>
      </div>
      <div className="my-8 flex flex-row justify-between  tracking-wide lg:my-4 ">
        <div className="">
          <h1 className="font-light lg:text-6xl text-5xl">{data.temp}°</h1>
          <p>Feels like {data.feels_like}°</p>
        </div>
        <div className="text-8xl">{getWeatherIcon(data.weather_icon)}</div>
      </div>

      <div className="flex flex-row gap-2">
        <div className="flex flex-row gap-5">
          <h3>Humidity: {data.humidity}%</h3>
          <h3>Wind: {data.wind_speed}m/s</h3>
        </div>
        <div className="flex flex-row gap-5">
          <button
            className=" bg-secondary hover:drop-shadow-lg rounded-xl  text-sm px-2 py-1 "
            onClick={() => setShowWeatherGraph(!showWeatherGraph)}
          >
            {showWeatherGraph ? 'Hide Graph' : ' Show Graph'}
          </button>
        </div>
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
      case '01':
        return <WiNightClear />;
      case '02':
        return <WiDaySunnyOvercast />;
      case '03':
        return <WiNightPartlyCloudy />;
      case '04':
        return <WiNightCloudy />;
      case '09':
        return <WiDayShowers />;
      case '10':
        return <WiNightRainWind />;
      case '11':
        return <WiNightThunderstorm />;
      case '13':
        return <WiNightSnow />;
      case '50':
        return <WiNightFog />;
      default:
        return <WiNightClear />;
    }
  }
}
