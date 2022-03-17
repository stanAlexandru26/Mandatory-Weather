import React, { useState } from 'react';
import Search from '../components/Search';

import useActualPosition from '../hooks/useActualPosition';
import useOneCall from '../hooks/useOneCall';

import BasicWeatherCard from '../components/BasicWeatherCard';
import WeatherGraph from '../components/WeatherGraph';
import ForecastWeatherCard from '../components/ForecastWeatherCard';

export default function Home() {
  const [search, setSearch] = useState('Barcelona');
  const [browserCoordonates, setBrowserCoordonates] = useState({});

  const [showWeatherGraph, setShowWeatherGraph] = useState(false);

  let truePosition = useActualPosition(search, browserCoordonates);

  const { current, chartData, daily } = useOneCall(truePosition, 'metric');

  const getLocalWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setBrowserCoordonates({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setSearch(null);
        },

        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            alert('User denied the request for Geolocation.');
          }
        },
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <main className="mx-auto w-5/6 md:w-full xl:max-w-6xl 2xl:max-w-7xl ">
      <Search
        setSearch={setSearch}
        getLocalWeather={getLocalWeather}
        setBrowserCoordonates={setBrowserCoordonates}
      />

      <div className=" m-auto my-4 h-auto w-full  overflow-hidden rounded-lg shadow-lg md:w-3/5 lg:w-1/2">
        {current && (
          <BasicWeatherCard
            data={current}
            showWeatherGraph={showWeatherGraph}
            setShowWeatherGraph={setShowWeatherGraph}
          />
        )}
        {chartData && (
          <div className=" mt-5 p-5 bg-primary  drop-shadow-lg rounded-xl ">
            {daily.slice(1).map((item, index) => (
              <ForecastWeatherCard key={index} data={item} />
            ))}
          </div>
        )}
        {showWeatherGraph && (
          <div className="m-auto mt-5 bg-primary p-5 rounded-xl drop-shadow-lg  ">
            <WeatherGraph data={chartData} />
          </div>
        )}
      </div>
    </main>
  );
}
