import React from 'react';
import getWeatherIcon from '../utils/getWeatherIcon';
import moment from 'moment';

export default function BasicWeatherCard({
  data,
  setShowWeatherGraph,
  showWeatherGraph,
}) {
  return (
    <div className="my-auto mx-auto bg-primary p-5 rounded-xl drop-shadow-lg lg:w-2/5 ">
      <div>
        <h1 className="text-2xl font-semibold tracking-wide dark:text-primary">
          {data.city}, {data.country}
        </h1>
        <h2 className="tracking-wide text-secondary">
          {moment.unix(data.time).utc().format("dddd h:mm a")}, {data.weather_description}
        </h2>
      </div>
      <div className="my-8 flex flex-row justify-between  tracking-wide lg:my-4 ">
        <div className="">
          <h1 className="font-bold lg:text-6xl text-5xl">{data.temp}°</h1>
          <p>Feels like {data.feels_like}°</p>
        </div>
        <div className="text-8xl">
          {getWeatherIcon(data.weather_id, data.time, data.sunRise, data.sunSet)}
        </div>
      </div>

      <div className="flex flex-row gap-5 flex-basis-1/3">
        <h3>Humidity: {data.humidity}%</h3>
        <h3>Wind: {data.wind_speed}m/s</h3>
        <button
          className=" bg-secondary hover:drop-shadow-lg rounded-xl active:drop-shadow-lg text-sm px-2 py-1  "
          onClick={() => setShowWeatherGraph(!showWeatherGraph)}
        >
          {showWeatherGraph ? 'Hide Graph' : ' Show Graph'}
        </button>
      </div>
    </div>
  );
}
