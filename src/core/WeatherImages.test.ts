import { getWeatherIcon } from './WeatherImages';

describe('WeatherImages', () => {
    describe('getWeatherIcon', () => {
        describe('day time', () => {
            test('WeatherID is 200, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 200;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 201, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 201;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 202, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 202;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 210, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 210;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 211, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 211;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 212, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 212;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 221, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 221;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 230, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 230;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 231, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 231;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 232, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 232;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 300, returns drizzle icon', () => {
                // Arrange
                const weatherID = 300;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 301, returns drizzle icon', () => {
                // Arrange
                const weatherID = 301;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 302, returns drizzle icon', () => {
                // Arrange
                const weatherID = 302;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 310, returns drizzle icon', () => {
                // Arrange
                const weatherID = 310;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 311, returns drizzle icon', () => {
                // Arrange
                const weatherID = 311;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 312, returns drizzle icon', () => {
                // Arrange
                const weatherID = 312;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 313, returns drizzle icon', () => {
                // Arrange
                const weatherID = 313;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 314, returns drizzle icon', () => {
                // Arrange
                const weatherID = 314;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 321, returns drizzle icon', () => {
                // Arrange
                const weatherID = 321;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 500, returns rain icon', () => {
                // Arrange
                const weatherID = 500;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 501, returns rain icon', () => {
                // Arrange
                const weatherID = 501;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 502, returns rain icon', () => {
                // Arrange
                const weatherID = 502;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 503, returns rain icon', () => {
                // Arrange
                const weatherID = 503;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 504, returns rain icon', () => {
                // Arrange
                const weatherID = 504;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 511, returns rain icon', () => {
                // Arrange
                const weatherID = 511;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 520, returns shower icon', () => {
                // Arrange
                const weatherID = 520;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('shower.svg');
            });
    
            test('WeatherID is 521, returns shower icon', () => {
                // Arrange
                const weatherID = 521;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('shower.svg');
            });
    
            test('WeatherID is 522, returns shower icon', () => {
                // Arrange
                const weatherID = 522;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('shower.svg');
            });
    
            test('WeatherID is 531, returns shower icon', () => {
                // Arrange
                const weatherID = 531;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('shower.svg');
            });
    
            test('WeatherID is 600, returns snow icon', () => {
                // Arrange
                const weatherID = 600;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 601, returns snow icon', () => {
                // Arrange
                const weatherID = 601;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 602, returns snow icon', () => {
                // Arrange
                const weatherID = 602;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 611, returns snow icon', () => {
                // Arrange
                const weatherID = 611;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 612, returns snow icon', () => {
                // Arrange
                const weatherID = 612;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 613, returns snow icon', () => {
                // Arrange
                const weatherID = 613;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 615, returns snow icon', () => {
                // Arrange
                const weatherID = 615;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 616, returns snow icon', () => {
                // Arrange
                const weatherID = 616;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 620, returns snow icon', () => {
                // Arrange
                const weatherID = 620;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 621, returns snow icon', () => {
                // Arrange
                const weatherID = 621;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 622, returns snow icon', () => {
                // Arrange
                const weatherID = 622;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });

            test('WeatherID is 701, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 701;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 711, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 711;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 721, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 721;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 731, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 731;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 741, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 741;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 751, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 751;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 761, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 761;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 762, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 762;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 771, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 771;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 718, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 781;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });
    
            test('WeatherID is 800, returns clear icon', () => {
                // Arrange
                const weatherID = 800;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('clear.svg');
            });
    
            test('WeatherID is 801, returns cloudy icon', () => {
                // Arrange
                const weatherID = 801;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('cloudy.svg');
            });
    
            test('WeatherID is 802, returns cloudy icon', () => {
                // Arrange
                const weatherID = 802;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('cloudy.svg');
            });
    
            test('WeatherID is 803, returns cloudy icon', () => {
                // Arrange
                const weatherID = 803;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('cloudy.svg');
            });
    
            test('WeatherID is 804, returns cloudy icon', () => {
                // Arrange
                const weatherID = 804;
    
                // Action
                const icon = getWeatherIcon(weatherID);
    
                // Assert
                expect(icon).toBe('cloudy.svg');
            });
        });

        describe('night time', () => {
            test('WeatherID is 200, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 200;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 201, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 201;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 202, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 202;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 210, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 210;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 211, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 211;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 212, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 212;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 221, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 221;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 230, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 230;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 231, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 231;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 232, returns thunder storm icon', () => {
                // Arrange
                const weatherID = 232;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('thunder-storm.svg');
            });
    
            test('WeatherID is 300, returns drizzle icon', () => {
                // Arrange
                const weatherID = 300;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 301, returns drizzle icon', () => {
                // Arrange
                const weatherID = 301;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 302, returns drizzle icon', () => {
                // Arrange
                const weatherID = 302;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 310, returns drizzle icon', () => {
                // Arrange
                const weatherID = 310;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 311, returns drizzle icon', () => {
                // Arrange
                const weatherID = 311;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 312, returns drizzle icon', () => {
                // Arrange
                const weatherID = 312;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 313, returns drizzle icon', () => {
                // Arrange
                const weatherID = 313;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 314, returns drizzle icon', () => {
                // Arrange
                const weatherID = 314;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 321, returns drizzle icon', () => {
                // Arrange
                const weatherID = 321;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('drizzle.svg');
            });
    
            test('WeatherID is 500, returns rain icon', () => {
                // Arrange
                const weatherID = 500;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 501, returns rain icon', () => {
                // Arrange
                const weatherID = 501;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 502, returns rain icon', () => {
                // Arrange
                const weatherID = 502;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 503, returns rain icon', () => {
                // Arrange
                const weatherID = 503;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 504, returns rain icon', () => {
                // Arrange
                const weatherID = 504;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 511, returns rain icon', () => {
                // Arrange
                const weatherID = 511;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('rain.svg');
            });
    
            test('WeatherID is 520, returns shower icon', () => {
                // Arrange
                const weatherID = 520;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('shower.svg');
            });
    
            test('WeatherID is 521, returns shower icon', () => {
                // Arrange
                const weatherID = 521;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('shower.svg');
            });
    
            test('WeatherID is 522, returns shower icon', () => {
                // Arrange
                const weatherID = 522;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('shower.svg');
            });
    
            test('WeatherID is 531, returns shower icon', () => {
                // Arrange
                const weatherID = 531;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('shower.svg');
            });
    
            test('WeatherID is 600, returns snow icon', () => {
                // Arrange
                const weatherID = 600;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 601, returns snow icon', () => {
                // Arrange
                const weatherID = 601;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 602, returns snow icon', () => {
                // Arrange
                const weatherID = 602;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 611, returns snow icon', () => {
                // Arrange
                const weatherID = 611;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 612, returns snow icon', () => {
                // Arrange
                const weatherID = 612;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 613, returns snow icon', () => {
                // Arrange
                const weatherID = 613;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 615, returns snow icon', () => {
                // Arrange
                const weatherID = 615;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 616, returns snow icon', () => {
                // Arrange
                const weatherID = 616;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 620, returns snow icon', () => {
                // Arrange
                const weatherID = 620;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 621, returns snow icon', () => {
                // Arrange
                const weatherID = 621;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });
    
            test('WeatherID is 622, returns snow icon', () => {
                // Arrange
                const weatherID = 622;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('snow.svg');
            });

            test('WeatherID is 701, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 701;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 711, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 711;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 721, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 721;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 731, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 731;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 741, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 741;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 751, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 751;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 761, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 761;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 762, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 762;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 771, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 771;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });

            test('WeatherID is 718, returns atmosphere icon', () => {
                // Arrange
                const weatherID = 781;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('atmosphere.svg');
            });
    
            test('WeatherID is 800, returns sunny night icon', () => {
                // Arrange
                const weatherID = 800;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('clear-night.svg');
            });
    
            test('WeatherID is 801, returns cloudy night icon', () => {
                // Arrange
                const weatherID = 801;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('cloudy-night.svg');
            });
    
            test('WeatherID is 802, returns cloudy night icon', () => {
                // Arrange
                const weatherID = 802;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('cloudy-night.svg');
            });
    
            test('WeatherID is 803, returns cloudy night icon', () => {
                // Arrange
                const weatherID = 803;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('cloudy-night.svg');
            });
    
            test('WeatherID is 804, returns cloudy night icon', () => {
                // Arrange
                const weatherID = 804;
    
                // Action
                const icon = getWeatherIcon(weatherID, true);
    
                // Assert
                expect(icon).toBe('cloudy-night.svg');
            });
        });
    });
});