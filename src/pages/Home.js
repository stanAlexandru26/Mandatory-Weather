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
  let truePosition = useActualPosition(search, browserCoordonates);
  const [showWeatherGraph, setShowWeatherGraph] = useState(false);
  
  const { current, chartData, daily } = useOneCall(truePosition, 'metric');


  return (
    <main className="mx-auto w-5/6 md:w-full lg:max-w-7xl xl:max-w-7xl 2xl:max-w-7xl ">
      <Search
        setSearch={setSearch}
        setBrowserCoordonates={setBrowserCoordonates}
      />

      <div className=" m-auto my-5 h-auto rounded-lg md:w-3/5 lg:w-10/12">
        <div className="lg:flex gap-2">
          {current && (
            <BasicWeatherCard
              data={current}
              showWeatherGraph={showWeatherGraph}
              setShowWeatherGraph={setShowWeatherGraph}
            />
          )}
          {chartData && (
            <div className=" mx-auto lg:flex mt-5 lg:mt-0 p-5 bg-primary drop-shadow-lg rounded-xl justify-between ">
              {daily.slice(1).map((item, index) => (
                <ForecastWeatherCard key={index} data={item} />
              ))}
            </div>
          )}
        </div>
        {showWeatherGraph && (
          <div className="mx-auto mt-5 bg-primary p-2 rounded-xl drop-shadow-lg ">
            <WeatherGraph data={chartData} />
          </div>
        )}
      </div>
    </main>
  );
}
