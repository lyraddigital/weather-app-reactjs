import { render } from '@testing-library/react';

import { useLocation } from 'hooks';
import { LocationContext } from 'context';
import { LocationStore, WeatherLocation } from 'models';

const TempLocationChild = () => {
  const location = useLocation();

  return (
    <>
      <div data-testid="use-location-city">{location?.city}</div>
      <div data-testid="use-location-country">{location?.country}</div>
      <div data-testid="use-location-lat">{location?.lat}</div>
      <div data-testid="use-location-lon">{location?.lon}</div>
    </>
  );
};

describe('useLocation', () => {
  it('Returns a WeatherLocation object when the LocationStore is defined', async () => {
    // Arrange
    const location: WeatherLocation = {
      city: 'Melbourne',
      country: 'Australia',
      lat: 37.8,
      lon: 144.9,
    };
    const store: LocationStore = {
      location,
      updateLocation: (_: WeatherLocation) => {},
    };

    // Action
    const wrapper = render(
      <LocationContext.Provider value={store}>
        <TempLocationChild />
      </LocationContext.Provider>,
    );

    // Assert
    const cityEl = await wrapper.findByTestId('use-location-city');
    const countryEl = await wrapper.findByTestId('use-location-country');
    const latEl = await wrapper.findByTestId('use-location-lat');
    const lonEl = await wrapper.findByTestId('use-location-lon');

    expect(cityEl.textContent).toBe(location.city);
    expect(countryEl.textContent).toBe(location.country);
    expect(latEl.textContent).toBe(location.lat!.toString());
    expect(lonEl.textContent).toBe(location.lon!.toString());
  });

  it('Returns an undefined when the LocationStore is not defined', async () => {
    // Arrange
    const store: LocationStore = {
      location: undefined,
      updateLocation: (_: WeatherLocation) => {},
    };

    // Action
    const wrapper = render(
      <LocationContext.Provider value={store}>
        <TempLocationChild />
      </LocationContext.Provider>,
    );

    // Assert
    const cityEl = await wrapper.findByTestId('use-location-city');
    const countryEl = await wrapper.findByTestId('use-location-country');
    const latEl = await wrapper.findByTestId('use-location-lat');
    const lonEl = await wrapper.findByTestId('use-location-lon');

    expect(cityEl.textContent).toBe('');
    expect(countryEl.textContent).toBe('');
    expect(latEl.textContent).toBe('');
    expect(lonEl.textContent).toBe('');
  });

  it('Returns an undefined when location on the LocationStore is undefined', async () => {
    // Arrange / Action
    const wrapper = render(
      <LocationContext.Provider value={undefined}>
        <TempLocationChild />
      </LocationContext.Provider>,
    );

    // Assert
    const cityEl = await wrapper.findByTestId('use-location-city');
    const countryEl = await wrapper.findByTestId('use-location-country');
    const latEl = await wrapper.findByTestId('use-location-lat');
    const lonEl = await wrapper.findByTestId('use-location-lon');

    expect(cityEl.textContent).toBe('');
    expect(countryEl.textContent).toBe('');
    expect(latEl.textContent).toBe('');
    expect(lonEl.textContent).toBe('');
  });
});
