import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

export default function useOneCall(position, units) {
  let { cityName, cityCountry, lat, lon } = position;

  const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
  const countryNameinEnglish = new Intl.DisplayNames('en-US', {
    type: 'region',
  });

  function format_time(time) {
    return new Date(time * 1e3).toISOString().slice(-13, -5);
  }
  const capitalize = (str) => {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  const oneCall_URL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}7&lon=${lon}&units=${units}&exclude=minutely&appid=${API_KEY}`;

  const [oneCall, setOneCall] = useState({});
  useEffect(() => {
    axios.get(oneCall_URL).then((response) => {
      console.log(response.data);
      setOneCall({
        current: {
          city: cityName,
          country: countryNameinEnglish.of(cityCountry),
          timezone: response.data.timezone,
          time: moment
            .unix(response.data.timezone_offset + response.data.current.dt)
            .utc()
            .format('dddd HH:mm a'),
          temp: Math.round(response.data.current.temp),
          feels_like: Math.round(response.data.current.feels_like),
          humidity: response.data.current.humidity,
          wind_speed: response.data.current.wind_speed,
          wind_deg: response.data.current.wind_deg,
          weather_id: response.data.current.weather[0].id,
          weather_main: response.data.current.weather[0].main,
          weather_description: capitalize(
            response.data.current.weather[0].description,
          ),
          weather_icon: response.data.current.weather[0].icon,
          sunSet: format_time(response.data.current.sunset),
          sunRise: format_time(response.data.current.sunrise),
        },
        hourly: response.data.hourly.map((hour) => {
          return {
            time: hour.dt,
            temp: Math.round(hour.temp),
            weather_id: hour.weather[0].id,
            weather_main: hour.weather[0].main,
            weather_description: capitalize(hour.weather[0].description),
            weather_icon: hour.weather[0].icon,
            wind_speed: Math.round(hour.wind_speed * 3.6),
            wind_deg: hour.wind_deg,
          };
        }),
        daily: response.data.daily.map((day) => {
          return {
            time: day.dt,
            temp_min: Math.round(day.temp.min),
            temp_max: Math.round(day.temp.max),
            weather_id: day.weather[0].id,
            weather_main: day.weather[0].main,
            weather_description: capitalize(day.weather[0].description),
            weather_icon: day.weather[0].icon,
            wind_speed: day.wind_speed,
            wind_deg: day.wind_deg,
          };
        }),

        chartData: {
          hourlyChartData: response.data.hourly.map((hour) => {
            return {
              time: moment.unix(hour.dt).utc().format('ddd hh:mm a'),
              weather_description: capitalize(hour.weather[0].description),
              temp: Math.round(hour.temp),
            };
          }),
          dailyChartData: response.data.daily.map((day) => {
            return {
              time: moment.unix(day.dt).utc().format('ddd'),
              temp_min: Math.round(day.temp.min),
              temp_max: Math.round(day.temp.max),
              temp: Math.round(day.temp.day),
              weather_description: capitalize(day.weather[0].description),
            };
          }),
        },
      });
    });
  }, [cityName]);

  return oneCall;
}

// {response.data.alert === undefined ?"": {alerts: response.data.alerts.map((alert) => {
//   return {
//     title: alert.event,
//     description: alert.description,
//     start: moment.unix(alert.start).utc().format('dd HH:mm a'),
//     end: moment.unix(alert.end).utc().format('DD  HH:mm a'),
//     sender_name: alert.sender_name,
//   };
// }),}},