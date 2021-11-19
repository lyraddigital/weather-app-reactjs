import atmosphere from 'assets/atmosphere.svg';
import clear from 'assets/clear.svg';
import clearNight from 'assets/clear-night.svg';
import cloudy from 'assets/cloudy.svg';
import cloudyNight from 'assets/cloudy-night.svg';
import drizzle from 'assets/drizzle.svg';
import rain from 'assets/rain.svg';
import shower from 'assets/shower.svg';
import snow from 'assets/snow.svg';
import thunderStorm from 'assets/thunder-storm.svg';

const enum WeatherType {
    Thunderstorm,
    Drizzle,
    Shower,
    Rain,
    Snow,
    Atmospheric,
    Clouds,
    Clear
};

const weatherIdTypeMatrix: { [weatherId: number]: WeatherType } = {
    200: WeatherType.Thunderstorm, 201: WeatherType.Thunderstorm,
    202: WeatherType.Thunderstorm, 210: WeatherType.Thunderstorm,
    211: WeatherType.Thunderstorm, 212: WeatherType.Thunderstorm,
    221: WeatherType.Thunderstorm, 230: WeatherType.Thunderstorm,
    231: WeatherType.Thunderstorm, 232: WeatherType.Thunderstorm,
    300: WeatherType.Drizzle, 301: WeatherType.Drizzle,
    302: WeatherType.Drizzle, 310: WeatherType.Drizzle,
    311: WeatherType.Drizzle, 312: WeatherType.Drizzle,
    313: WeatherType.Drizzle, 314: WeatherType.Drizzle,
    321: WeatherType.Drizzle, 500: WeatherType.Rain,
    501: WeatherType.Rain, 502: WeatherType.Rain,
    503: WeatherType.Rain, 504: WeatherType.Rain,
    511: WeatherType.Rain, 520: WeatherType.Shower,
    521: WeatherType.Shower, 522: WeatherType.Shower,
    531: WeatherType.Shower, 600: WeatherType.Snow,
    601: WeatherType.Snow, 602: WeatherType.Snow,
    611: WeatherType.Snow, 612: WeatherType.Snow,
    613: WeatherType.Snow, 615: WeatherType.Snow,
    616: WeatherType.Snow, 620: WeatherType.Snow,
    621: WeatherType.Snow, 622: WeatherType.Snow,
    701: WeatherType.Atmospheric, 711: WeatherType.Atmospheric,
    721: WeatherType.Atmospheric, 731: WeatherType.Atmospheric,
    741: WeatherType.Atmospheric, 751: WeatherType.Atmospheric,
    761: WeatherType.Atmospheric, 762: WeatherType.Atmospheric,
    771: WeatherType.Atmospheric, 781: WeatherType.Atmospheric,
    800: WeatherType.Clear, 801: WeatherType.Clouds,
    802: WeatherType.Clouds, 803: WeatherType.Clouds,
    804: WeatherType.Clouds
};

const weatherImages: { [imagesKey: string]: string } = {
    [(`${WeatherType.Thunderstorm.toString()}-true`)]: thunderStorm,
    [(`${WeatherType.Thunderstorm.toString()}-false`)]: thunderStorm,
    [(`${WeatherType.Drizzle.toString()}-true`)]: drizzle,
    [(`${WeatherType.Drizzle.toString()}-false`)]: drizzle,
    [(`${WeatherType.Shower.toString()}-true`)]: shower,
    [(`${WeatherType.Shower.toString()}-false`)]: shower,
    [(`${WeatherType.Rain.toString()}-true`)]: rain,
    [(`${WeatherType.Rain.toString()}-false`)]: rain,
    [(`${WeatherType.Snow.toString()}-true`)]: snow,
    [(`${WeatherType.Snow.toString()}-false`)]: snow,
    [(`${WeatherType.Atmospheric.toString()}-true`)]: atmosphere,
    [(`${WeatherType.Atmospheric.toString()}-false`)]: atmosphere,
    [(`${WeatherType.Clouds.toString()}-false`)]: cloudy,
    [(`${WeatherType.Clouds.toString()}-true`)]: cloudyNight,
    [(`${WeatherType.Clear.toString()}-false`)]: clear,
    [(`${WeatherType.Clear.toString()}-true`)]: clearNight
};

export const getWeatherIcon = (weatherId: number, isNightTime: boolean = false): string | undefined => {
    const weatherType = weatherIdTypeMatrix[weatherId] ?? WeatherType.Clear;
    const imagesKey = `${weatherType.toString()}-${isNightTime.toString()}`;

    return weatherImages[imagesKey] || undefined;
};