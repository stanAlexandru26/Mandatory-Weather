import React from 'react';
import {
  WiDayThunderstorm,
  WiDayLightning,
  WiDaySprinkle,
  WiDayRainWind,
  WiDayRain,
  WiDaySnow,
  WiDayRainMix,
  WiDayShowers,
  WiDayStormShowers,
  WiDaySleet,
  WiShowers,
  WiSmoke,
  WiDayHaze,
  WiDust,
  WiDayFog,
  WiDayCloudyGusts,
  WiTornado,
  WiDaySunny,
  WiDaySunnyOvercast,
  WiHurricane,
  WiSnowflakeCold,
  WiHot,
  WiDayWindy,
  WiDayHail,
  WiStrongWind,
  WiMoonAltNew,
  WiNightAltThunderstorm,
  WiNightAltLightning,
  WiNightAltSprinkle,
  WiNightAltRain,
  WiNightAltRainMix,
  WiNightAltShowers,
  WiNightAltStormShowers,
  WiNightAltSnow,
  WiNightAltSleet,
  WiNightFog,
  WiNightAltCloudyGusts,
  WiNightClear,
  WiNightAltCloudy,
  WiNightAltCloudyWindy,
  WiNightAltHail,
} from 'react-icons/wi';

export default function getWeatherIcon(id, unixTime, sunRise, sunSet) {
  const timeOfDay = unixTime < sunRise || unixTime > sunSet ? 'night' : 'day';

  if (timeOfDay === 'day') {
    switch (id) {
      case 200:
        return <WiDayThunderstorm />;
      case 201:
        return <WiDayThunderstorm />;
      case 202:
        return <WiDayThunderstorm />;
      case 210:
        return <WiDayLightning />;
      case 211:
        return <WiDayLightning />;
      case 212:
        return <WiDayLightning />;
      case 221:
        return <WiDayLightning />;
      case 230:
        return <WiDayThunderstorm />;
      case 231:
        return <WiDayThunderstorm />;
      case 232:
        return <WiDayThunderstorm />;
      case 300:
        return <WiDaySprinkle />;
      case 301:
        return <WiDaySprinkle />;
      case 302:
        return <WiDayRainWind />;
      case 310:
        return <WiDayRain />;
      case 311:
        return <WiDayRain />;
      case 312:
        return <WiDayRainWind />;
      case 313:
        return <WiDayRainWind />;
      case 314:
        return <WiDayRainWind />;
      case 321:
        return <WiDaySprinkle />;
      case 500:
        return <WiDaySprinkle />;
      case 501:
        return <WiDayRain />;
      case 502:
        return <WiDayRain />;
      case 503:
        return <WiDayRain />;
      case 504:
        return <WiDayRain />;
      case 511:
        return <WiDayRainMix />;
      case 520:
        return <WiDayShowers />;
      case 521:
        return <WiDayShowers />;
      case 522:
        return <WiDayShowers />;
      case 531:
        return <WiDayStormShowers />;
      case 600:
        return <WiDaySnow />;
      case 601:
        return <WiDaySleet />;
      case 602:
        return <WiDaySnow />;
      case 611:
        return <WiDayRainMix />;
      case 612:
        return <WiDayRainMix />;
      case 615:
        return <WiDayRainMix />;
      case 616:
        return <WiDayRainMix />;
      case 620:
        return <WiDayRainMix />;
      case 621:
        return <WiDaySnow />;
      case 622:
        return <WiDaySnow />;
      case 701:
        return <WiShowers />;
      case 711:
        return <WiSmoke />;
      case 721:
        return <WiDayHaze />;
      case 731:
        return <WiDust />;
      case 741:
        return <WiDayFog />;
      case 751:
        return <WiDayCloudyGusts />;
      case 761:
        return <WiDust />;
      case 762:
        return <WiDust />;
      case 771:
        return <WiDayCloudyGusts />;
      case 781:
        return <WiTornado />;
      case 800:
        return <WiDaySunny />;
      case 801:
        return <WiDayCloudyGusts />;
      case 802:
        return <WiDayCloudyGusts />;
      case 803:
        return <WiDayCloudyGusts />;
      case 804:
        return <WiDaySunnyOvercast />;
      case 900:
        return <WiTornado />;
      case 901:
        return <WiDayStormShowers />;
      case 902:
        return <WiHurricane />;
      case 903:
        return <WiSnowflakeCold />;
      case 904:
        return <WiHot />;
      case 905:
        return <WiDayWindy />;
      case 906:
        return <WiDayHail />;
      case 951:
        return <WiDaySunny />;
      case 952:
        return <WiDayCloudyGusts />;
      case 953:
        return <WiDayCloudyGusts />;
      case 954:
        return <WiDayCloudyGusts />;
      case 955:
        return <WiDayCloudyGusts />;
      case 956:
        return <WiDayCloudyGusts />;
      case 957:
        return <WiStrongWind />;
      case 958:
        return <WiDayCloudyGusts />;
      case 959:
        return <WiDayCloudyGusts />;
      case 960:
        return <WiDayThunderstorm />;
      case 961:
        return <WiDayThunderstorm />;
      case 962:
        return <WiDayCloudyGusts />;
      default:
        return <WiDaySunny />;
    }
  } else if (timeOfDay === 'night') {
    switch (id) {
      case 200:
        return <WiNightAltThunderstorm />;
      case 201:
        return <WiNightAltThunderstorm />;
      case 202:
        return <WiNightAltThunderstorm />;
      case 210:
        return <WiNightAltLightning />;
      case 211:
        return <WiNightAltLightning />;
      case 212:
        return <WiNightAltLightning />;
      case 221:
        return <WiNightAltLightning />;
      case 230:
        return <WiNightAltThunderstorm />;
      case 231:
        return <WiNightAltThunderstorm />;
      case 232:
        return <WiNightAltThunderstorm />;
      case 300:
        return <WiNightAltSprinkle />;
      case 301:
        return <WiNightAltSprinkle />;
      case 302:
        return <WiNightAltSprinkle />;
      case 310:
        return <WiNightAltRain />;
      case 311:
        return <WiNightAltRain />;
      case 312:
        return <WiNightAltRain />;
      case 313:
        return <WiNightAltRain />;
      case 314:
        return <WiNightAltRain />;
      case 321:
        return <WiNightAltSprinkle />;
      case 500:
        return <WiNightAltSprinkle />;
      case 501:
        return <WiNightAltRain />;
      case 502:
        return <WiNightAltRain />;
      case 503:
        return <WiNightAltRain />;
      case 504:
        return <WiNightAltRain />;
      case 511:
        return <WiNightAltRainMix />;
      case 520:
        return <WiNightAltShowers />;
      case 521:
        return <WiNightAltShowers />;
      case 522:
        return <WiNightAltShowers />;
      case 531:
        return <WiNightAltStormShowers />;
      case 600:
        return <WiNightAltSnow />;
      case 601:
        return <WiNightAltSleet />;
      case 602:
        return <WiDaySnow />;
      case 611:
        return <WiNightAltSnow />;
      case 612:
        return <WiNightAltRainMix />;
      case 615:
        return <WiNightAltRainMix />;
      case 616:
        return <WiNightAltRainMix />;
      case 620:
        return <WiNightAltRainMix />;
      case 621:
        return <WiNightAltSnow />;
      case 622:
        return <WiNightAltSnow />;
      case 701:
        return <WiNightAltShowers />;
      case 711:
        return <WiSmoke />;
      case 721:
        return <WiDayHaze />;
      case 731:
        return <WiDust />;
      case 741:
        return <WiNightFog />;
      case 751:
        return <WiNightAltCloudyGusts />;
      case 761:
        return <WiDust />;
      case 762:
        return <WiDust />;
      case 771:
        return <WiNightAltCloudyGusts />;
      case 781:
        return <WiTornado />;
      case 800:
        return <WiNightClear />;
      case 801:
        return <WiNightAltCloudyGusts />;
      case 802:
        return <WiNightAltCloudyGusts />;
      case 803:
        return <WiNightAltCloudyGusts />;
      case 804:
        return <WiNightAltCloudy />;
      case 900:
        return <WiTornado />;
      case 901:
        return <WiNightAltStormShowers />;
      case 902:
        return <WiHurricane />;
      case 903:
        return <WiSnowflakeCold />;
      case 904:
        return <WiHot />;
      case 905:
        return <WiNightAltCloudyWindy />;
      case 906:
        return <WiNightAltHail />;
      case 951:
        return <WiNightClear />;
      case 952:
        return <WiNightAltCloudyGusts />;
      case 953:
        return <WiNightAltCloudyGusts />;
      case 954:
        return <WiNightAltCloudyGusts />;
      case 955:
        return <WiNightAltCloudyGusts />;
      case 956:
        return <WiNightAltCloudyGusts />;
      case 957:
        return <WiStrongWind />;
      case 958:
        return <WiNightAltCloudyGusts />;
      case 959:
        return <WiNightAltCloudyGusts />;
      case 960:
        return <WiNightAltThunderstorm />;
      case 961:
        return <WiNightAltThunderstorm />;
      case 962:
        return <WiNightAltCloudyGusts />;
      default:
        return <WiMoonAltNew />;
    }
  }
}
