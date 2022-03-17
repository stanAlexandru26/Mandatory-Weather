import React from 'react';
import { GiPositionMarker } from 'react-icons/gi';

export default function Search({
  setSearch,
  getLocalWeather,
  setBrowserCoordonates,
}) {
  const handleChange = (event) => {
    setSearch(event.target.value.trim());
    setBrowserCoordonates({});
  };

  return (
    <div className="m-auto w-4/5 md:w-3/5 lg:w-1/2 bg-primary p-2 rounded-xl drop-shadow-lg flex flex-row ">
      <div className="m-auto">
        <input
          type="text"
          onChange={(event) => handleChange(event)}
          name="search"
          placeholder="Search for a new place"
          className="bg-primary w-fit m-auto placeholder:text-secondary focus:outline-none"
        />
        <button onClick={getLocalWeather}>
          <GiPositionMarker />
        </button>
      </div>
    </div>
  );
}
