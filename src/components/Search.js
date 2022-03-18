import React, { useMemo } from 'react';
import { GiPositionMarker } from 'react-icons/gi';
import debounce from 'lodash-es/debounce';

export default function Search({ setSearch, setBrowserCoordonates }) {
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

  const debounceSearch = useMemo(
    () =>
      debounce((searchTerm) => {
        setSearch(searchTerm);
      }, 500),
    [],
  );
  const handleChange = (event) => {
    debounceSearch(event.target.value.trim());
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
        <button onClick={() => getLocalWeather()}>
          <GiPositionMarker />
        </button>
      </div>
    </div>
  );
}
