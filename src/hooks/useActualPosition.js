import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useActualPosition(search, browserCoordonates) {
  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

  const getPositionURL = (search, browserCoordonates) => {
    if (typeof browserCoordonates === 'object' && browserCoordonates.lat > 0) {
      return `http://api.openweathermap.org/geo/1.0/reverse?lat=${browserCoordonates.lat}&lon=${browserCoordonates.lon}&limit=1&appid=${API_KEY}`;
    } else {
      return `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${API_KEY}`;
    }
  };
  const [position, setPosition] = useState({});

  useEffect(() => {
    axios.get(getPositionURL(search, browserCoordonates)).then((response) => {
      setPosition({
        cityName: response.data[0].name,
        cityCountry: response.data[0].country,
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      });
    });
  }, [search, browserCoordonates]);

  return position;
}
