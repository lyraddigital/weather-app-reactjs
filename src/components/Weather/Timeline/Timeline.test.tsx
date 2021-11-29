import { render } from "@testing-library/react";

import { WeatherContext } from "context";
import { WeatherApiResponse } from "models";

import { Timeline } from "./Timeline";

describe('Timeline', () => {
  it('Shows the correct timeline data based on 24 hours of hourly data', () => {
    // Arrange
    const weatherData: WeatherApiResponse = {
      hourly:[
        { 
          temp: 14,
          dt: 1638190800, // 12AM
          weather: [
            { id: 800 }
          ]
        },
        { 
          temp: 14,
          dt: 1638194400, // 1AM
          weather: [
            { id: 801 }
          ]
        },
        { 
          temp: 13,
          dt: 1638198000,
          weather: [
            { id: 802 }
          ]
        },
        { 
          temp: 1,
          dt: 1638201600,
          weather: [
            { id: 802 }
          ]
        }
      ]
    };

    // Action
    const wrapper = render((
      <WeatherContext.Provider value={weatherData}>
        <Timeline />
      </WeatherContext.Provider>
    ));

    // Assert
  });
});