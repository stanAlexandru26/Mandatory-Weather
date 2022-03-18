import React from 'react';
import {
  WiWindBeaufort0,
  WiWindBeaufort1,
  WiWindBeaufort2,
  WiWindBeaufort3,
  WiWindBeaufort4,
  WiWindBeaufort5,
  WiWindBeaufort6,
  WiWindBeaufort7,
  WiWindBeaufort8,
  WiWindBeaufort9,
  WiWindBeaufort10,
  WiWindBeaufort11,
  WiWindBeaufort12,
} from 'react-icons/wi';

export default function getWindIcon(wind_speed, units) {
  const getCorrectWindSpeed = (wind_speed, units) => {
    if (units === 'metric') {
      return wind_speed;
    } else {
      return wind_speed * 0.44704;
    }
  };
  const windSpeed = getCorrectWindSpeed(wind_speed, units);

  if (windSpeed < 0.5) {
    return <WiWindBeaufort0 />;
  }
  if (windSpeed >= 0.5 && windSpeed < 1.5) {
    return <WiWindBeaufort1 />;
  }
  if (windSpeed >= 1.5 && windSpeed < 3.3) {
    return <WiWindBeaufort2 />;
  }
  if (windSpeed >= 3.3 && windSpeed < 5.4) {
    return <WiWindBeaufort3 />;
  }
  if (windSpeed >= 5.4 && windSpeed < 7.9) {
    return <WiWindBeaufort4 />;
  }
  if (windSpeed >= 7.9 && windSpeed < 10.7) {
    return <WiWindBeaufort5 />;
  }
  if (windSpeed >= 10.7 && windSpeed < 13.8) {
    return <WiWindBeaufort6 />;
  }
  if (windSpeed >= 13.8 && windSpeed < 17.1) {
    return <WiWindBeaufort7 />;
  }
  if (windSpeed >= 17.1 && windSpeed < 20.7) {
    return <WiWindBeaufort8 />;
  }
  if (windSpeed >= 20.7 && windSpeed < 24.4) {
    return <WiWindBeaufort9 />;
  }
  if (windSpeed >= 24.4 && windSpeed < 28.4) {
    return <WiWindBeaufort10 />;
  }
  if (windSpeed >= 28.4 && windSpeed < 32.7) {
    return <WiWindBeaufort11 />;
  }
  if (windSpeed >= 32.7) {
    return <WiWindBeaufort12 />;
  }
}
