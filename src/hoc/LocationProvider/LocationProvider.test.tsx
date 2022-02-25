import { useContext } from 'react';
import { render, screen } from '@testing-library/react';

import { LocationContext } from 'context';
import { LocationProvider } from './LocationProvider';

const TestProviderChildComponent = () => {
  const locationStore = useContext(LocationContext);

  const updateToNewLocation = () => {
    const newLocation = {
      city: 'Melbourne',
      country: 'Australia',
      lat: 30,
      lon: 45,
    };

    locationStore?.updateLocation(newLocation);
  };

  return (
    <>
      <div data-testid="location-provider-city">
        {locationStore?.location?.city}
      </div>
      <div data-testid="location-provider-country">
        {locationStore?.location?.country}
      </div>
      <div data-testid="location-provider-lat">
        {locationStore?.location?.lat}
      </div>
      <div data-testid="location-provider-lon">
        {locationStore?.location?.lon}
      </div>
      <button
        data-testid="location-provider-update-button"
        onClick={() => updateToNewLocation()}
      ></button>
    </>
  );
};

describe('LocationProvider', () => {
  it('By default contains no location details', () => {
    // Arrange / Action
    render(
      <LocationProvider>
        <TestProviderChildComponent />
      </LocationProvider>,
    );

    // Assert
    const cityEl = screen.getByTestId('location-provider-city');
    const countryEl = screen.getByTestId('location-provider-country');
    const latEl = screen.getByTestId('location-provider-lat');
    const lonEl = screen.getByTestId('location-provider-lon');

    expect(cityEl.textContent).toBe('');
    expect(countryEl.textContent).toBe('');
    expect(latEl.textContent).toBe('');
    expect(lonEl.textContent).toBe('');
  });

  it('Location details will be populated upon calling the update location button', () => {
    // Arrange
    render(
      <LocationProvider>
        <TestProviderChildComponent />
      </LocationProvider>,
    );

    // Action
    const updateLocationButton = screen.getByTestId(
      'location-provider-update-button',
    );

    updateLocationButton.click();

    // Assert
    const cityEl = screen.getByTestId('location-provider-city');
    const countryEl = screen.getByTestId('location-provider-country');
    const latEl = screen.getByTestId('location-provider-lat');
    const lonEl = screen.getByTestId('location-provider-lon');

    expect(cityEl.textContent).toBe('Melbourne');
    expect(countryEl.textContent).toBe('Australia');
    expect(latEl.textContent).toBe('30');
    expect(lonEl.textContent).toBe('45');
  });
});
