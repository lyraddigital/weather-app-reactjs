export const enum WeatherType {
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

export const getWeatherType = (weatherId: number): WeatherType | undefined => {
    return weatherIdTypeMatrix[weatherId];
};