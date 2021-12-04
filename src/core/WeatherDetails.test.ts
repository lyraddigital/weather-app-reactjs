import {
  getWeatherDescription,
  getWeatherType,
  WeatherType,
} from './WeatherDetails';

describe('WeatherDetails', () => {
  describe('getWeatherType', () => {
    it('WeatherID is undefined, returns undefined', () => {
      // Arrange
      const weatherID = undefined;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBeUndefined();
    });

    it('WeatherID is not a valid id, returns undefined', () => {
      // Arrange
      const weatherID = -1;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBeUndefined();
    });

    it('WeatherID is 200, returns thunder storm type', () => {
      // Arrange
      const weatherID = 200;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 201, returns thunder storm type', () => {
      // Arrange
      const weatherID = 201;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 202, returns thunder storm type', () => {
      // Arrange
      const weatherID = 202;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 210, returns thunder storm type', () => {
      // Arrange
      const weatherID = 210;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 211, returns thunder storm type', () => {
      // Arrange
      const weatherID = 211;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 212, returns thunder storm type', () => {
      // Arrange
      const weatherID = 212;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 221, returns thunder storm type', () => {
      // Arrange
      const weatherID = 221;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 230, returns thunder storm type', () => {
      // Arrange
      const weatherID = 230;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 231, returns thunder storm type', () => {
      // Arrange
      const weatherID = 231;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 232, returns thunder storm type', () => {
      // Arrange
      const weatherID = 232;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Thunderstorm);
    });

    it('WeatherID is 300, returns drizzle type', () => {
      // Arrange
      const weatherID = 300;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 301, returns drizzle type', () => {
      // Arrange
      const weatherID = 301;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 302, returns drizzle type', () => {
      // Arrange
      const weatherID = 302;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 310, returns drizzle type', () => {
      // Arrange
      const weatherID = 310;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 311, returns drizzle type', () => {
      // Arrange
      const weatherID = 311;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 312, returns drizzle type', () => {
      // Arrange
      const weatherID = 312;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 313, returns drizzle type', () => {
      // Arrange
      const weatherID = 313;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 314, returns drizzle type', () => {
      // Arrange
      const weatherID = 314;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 321, returns drizzle type', () => {
      // Arrange
      const weatherID = 321;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Drizzle);
    });

    it('WeatherID is 500, returns rain type', () => {
      // Arrange
      const weatherID = 500;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Rain);
    });

    it('WeatherID is 501, returns rain type', () => {
      // Arrange
      const weatherID = 501;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Rain);
    });

    it('WeatherID is 502, returns rain type', () => {
      // Arrange
      const weatherID = 502;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Rain);
    });

    it('WeatherID is 503, returns rain type', () => {
      // Arrange
      const weatherID = 503;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Rain);
    });

    it('WeatherID is 504, returns rain type', () => {
      // Arrange
      const weatherID = 504;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Rain);
    });

    it('WeatherID is 511, returns rain type', () => {
      // Arrange
      const weatherID = 511;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Rain);
    });

    it('WeatherID is 520, returns shower type', () => {
      // Arrange
      const weatherID = 520;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Shower);
    });

    it('WeatherID is 521, returns shower type', () => {
      // Arrange
      const weatherID = 521;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Shower);
    });

    it('WeatherID is 522, returns shower type', () => {
      // Arrange
      const weatherID = 522;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Shower);
    });

    it('WeatherID is 531, returns shower type', () => {
      // Arrange
      const weatherID = 531;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Shower);
    });

    it('WeatherID is 600, returns snow type', () => {
      // Arrange
      const weatherID = 600;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 601, returns snow type', () => {
      // Arrange
      const weatherID = 601;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 602, returns snow type', () => {
      // Arrange
      const weatherID = 602;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 611, returns snow type', () => {
      // Arrange
      const weatherID = 611;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 612, returns snow type', () => {
      // Arrange
      const weatherID = 612;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 613, returns snow type', () => {
      // Arrange
      const weatherID = 613;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 615, returns snow type', () => {
      // Arrange
      const weatherID = 615;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 616, returns snow type', () => {
      // Arrange
      const weatherID = 616;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 620, returns snow type', () => {
      // Arrange
      const weatherID = 620;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 621, returns snow type', () => {
      // Arrange
      const weatherID = 621;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 622, returns snow type', () => {
      // Arrange
      const weatherID = 622;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Snow);
    });

    it('WeatherID is 701, returns atmosphere type', () => {
      // Arrange
      const weatherID = 701;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 711, returns atmosphere type', () => {
      // Arrange
      const weatherID = 711;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 721, returns atmosphere type', () => {
      // Arrange
      const weatherID = 721;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 731, returns atmosphere type', () => {
      // Arrange
      const weatherID = 731;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 741, returns atmosphere type', () => {
      // Arrange
      const weatherID = 741;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 751, returns atmosphere type', () => {
      // Arrange
      const weatherID = 751;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 761, returns atmosphere type', () => {
      // Arrange
      const weatherID = 761;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 762, returns atmosphere type', () => {
      // Arrange
      const weatherID = 762;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 771, returns atmosphere type', () => {
      // Arrange
      const weatherID = 771;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 718, returns atmosphere type', () => {
      // Arrange
      const weatherID = 781;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Atmospheric);
    });

    it('WeatherID is 800, returns clear type', () => {
      // Arrange
      const weatherID = 800;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Clear);
    });

    it('WeatherID is 801, returns cloudy type', () => {
      // Arrange
      const weatherID = 801;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Clouds);
    });

    it('WeatherID is 802, returns cloudy type', () => {
      // Arrange
      const weatherID = 802;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Clouds);
    });

    it('WeatherID is 803, returns cloudy type', () => {
      // Arrange
      const weatherID = 803;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Clouds);
    });

    it('WeatherID is 804, returns cloudy type', () => {
      // Arrange
      const weatherID = 804;

      // Action
      const weatherType = getWeatherType(weatherID);

      // Assert
      expect(weatherType).toBe(WeatherType.Clouds);
    });
  });

  describe('getWeatherDescription', () => {
    it('WeatherID is undefined, returns undefined', () => {
      // Arrange
      const weatherID = undefined;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBeUndefined();
    });

    it('WeatherID is not a valid id, returns undefined', () => {
      // Arrange
      const weatherID = -1;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBeUndefined();
    });

    it('WeatherID is 200, returns correct message', () => {
      // Arrange
      const weatherID = 200;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Rain and thunderstorms');
    });

    it('WeatherID is 201, returns correct message', () => {
      // Arrange
      const weatherID = 201;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Rain and thunderstorms');
    });

    it('WeatherID is 202, returns correct message', () => {
      // Arrange
      const weatherID = 202;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Rain and thunderstorms');
    });

    it('WeatherID is 210, returns correct message', () => {
      // Arrange
      const weatherID = 210;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Light thunderstorms');
    });

    it('WeatherID is 211, returns correct message', () => {
      // Arrange
      const weatherID = 211;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Thunderstorms');
    });

    it('WeatherID is 212, returns correct message', () => {
      // Arrange
      const weatherID = 212;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Strong thunderstorms');
    });

    it('WeatherID is 221, returns correct message', () => {
      // Arrange
      const weatherID = 221;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Strong thunderstorms');
    });

    it('WeatherID is 230, returns correct message', () => {
      // Arrange
      const weatherID = 230;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Drizzle and thunderstorms');
    });

    it('WeatherID is 231, returns correct message', () => {
      // Arrange
      const weatherID = 231;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Drizzle and thunderstorms');
    });

    it('WeatherID is 232, returns correct message', () => {
      // Arrange
      const weatherID = 232;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Drizzle and thunderstorms');
    });

    it('WeatherID is 300, returns correct message', () => {
      // Arrange
      const weatherID = 300;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Light drizzle');
    });

    it('WeatherID is 301, returns correct message', () => {
      // Arrange
      const weatherID = 301;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Drizzle');
    });

    it('WeatherID is 302, returns correct message', () => {
      // Arrange
      const weatherID = 302;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Heavy drizzle');
    });

    it('WeatherID is 310, returns correct message', () => {
      // Arrange
      const weatherID = 310;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Light drizzle');
    });

    it('WeatherID is 311, returns correct message', () => {
      // Arrange
      const weatherID = 311;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Drizzle');
    });

    it('WeatherID is 312, returns correct message', () => {
      // Arrange
      const weatherID = 312;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Heavy drizzle');
    });

    it('WeatherID is 313, returns correct message', () => {
      // Arrange
      const weatherID = 313;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Showers and drizzling');
    });

    it('WeatherID is 314, returns correct message', () => {
      // Arrange
      const weatherID = 314;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Showers and drizzling');
    });

    it('WeatherID is 321, returns correct message', () => {
      // Arrange
      const weatherID = 321;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Showers and drizzling');
    });

    it('WeatherID is 500, returns correct message', () => {
      // Arrange
      const weatherID = 500;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Light rain');
    });

    it('WeatherID is 501, returns correct message', () => {
      // Arrange
      const weatherID = 501;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Rain');
    });

    it('WeatherID is 502, returns correct message', () => {
      // Arrange
      const weatherID = 502;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Heavy rain');
    });

    it('WeatherID is 503, returns correct message', () => {
      // Arrange
      const weatherID = 503;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Heavy rain');
    });

    it('WeatherID is 504, returns correct message', () => {
      // Arrange
      const weatherID = 504;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Heavy rain');
    });

    it('WeatherID is 511, returns correct message', () => {
      // Arrange
      const weatherID = 511;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Freezing rain');
    });

    it('WeatherID is 520, returns correct message', () => {
      // Arrange
      const weatherID = 520;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Light rain');
    });

    it('WeatherID is 521, returns correct message', () => {
      // Arrange
      const weatherID = 521;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Rain');
    });

    it('WeatherID is 522, returns correct message', () => {
      // Arrange
      const weatherID = 522;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Heavy rain');
    });

    it('WeatherID is 531, returns correct message', () => {
      // Arrange
      const weatherID = 531;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Heavy rain');
    });

    it('WeatherID is 600, returns correct message', () => {
      // Arrange
      const weatherID = 600;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Light snow');
    });

    it('WeatherID is 601, returns correct message', () => {
      // Arrange
      const weatherID = 601;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Snow');
    });

    it('WeatherID is 602, returns correct message', () => {
      // Arrange
      const weatherID = 602;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Heavy snow');
    });

    it('WeatherID is 611, returns correct message', () => {
      // Arrange
      const weatherID = 611;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Sleet');
    });

    it('WeatherID is 612, returns correct message', () => {
      // Arrange
      const weatherID = 612;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Sleet and showers');
    });

    it('WeatherID is 613, returns correct message', () => {
      // Arrange
      const weatherID = 613;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Sleet and showers');
    });

    it('WeatherID is 615, returns correct message', () => {
      // Arrange
      const weatherID = 615;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Rain with snow');
    });

    it('WeatherID is 616, returns correct message', () => {
      // Arrange
      const weatherID = 616;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Rain with snow');
    });

    it('WeatherID is 620, returns correct message', () => {
      // Arrange
      const weatherID = 620;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Showers with snow');
    });

    it('WeatherID is 621, returns correct message', () => {
      // Arrange
      const weatherID = 621;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Showers with snow');
    });

    it('WeatherID is 622, returns correct message', () => {
      // Arrange
      const weatherID = 622;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Showers with snow');
    });

    it('WeatherID is 701, returns correct message', () => {
      // Arrange
      const weatherID = 701;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Misty');
    });

    it('WeatherID is 711, returns correct message', () => {
      // Arrange
      const weatherID = 711;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Smokey');
    });

    it('WeatherID is 721, returns correct message', () => {
      // Arrange
      const weatherID = 721;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Hazey');
    });

    it('WeatherID is 731, returns correct message', () => {
      // Arrange
      const weatherID = 731;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Dusty');
    });

    it('WeatherID is 741, returns correct message', () => {
      // Arrange
      const weatherID = 741;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Foggy');
    });

    it('WeatherID is 751, returns correct message', () => {
      // Arrange
      const weatherID = 751;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Sandy');
    });

    it('WeatherID is 761, returns correct message', () => {
      // Arrange
      const weatherID = 761;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Dusty');
    });

    it('WeatherID is 762, returns correct message', () => {
      // Arrange
      const weatherID = 762;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Volcanic ash');
    });

    it('WeatherID is 771, returns correct message', () => {
      // Arrange
      const weatherID = 771;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Windy');
    });

    it('WeatherID is 718, returns correct message', () => {
      // Arrange
      const weatherID = 781;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Tornadoes');
    });

    it('WeatherID is 800, returns correct message', () => {
      // Arrange
      const weatherID = 800;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Clear');
    });

    it('WeatherID is 801, returns correct message', () => {
      // Arrange
      const weatherID = 801;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Few clouds');
    });

    it('WeatherID is 802, returns correct message', () => {
      // Arrange
      const weatherID = 802;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Scattered clouds');
    });

    it('WeatherID is 803, returns correct message', () => {
      // Arrange
      const weatherID = 803;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Cloudy');
    });

    it('WeatherID is 804, returns correct message', () => {
      // Arrange
      const weatherID = 804;

      // Action
      const weatherDescription = getWeatherDescription(weatherID);

      // Assert
      expect(weatherDescription).toBe('Overcast');
    });
  });
});
