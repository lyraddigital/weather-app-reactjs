import { useContext } from 'react';
import { render } from '@testing-library/react';

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
  it('By default contains no location details', async () => {
    // Arrange / Action
    const wrapper = render(
      <LocationProvider>
        <TestProviderChildComponent />
      </LocationProvider>,
    );

    // Assert
    const cityEl = await wrapper.findByTestId('location-provider-city');
    const countryEl = await wrapper.findByTestId('location-provider-country');
    const latEl = await wrapper.findByTestId('location-provider-lat');
    const lonEl = await wrapper.findByTestId('location-provider-lon');

    expect(cityEl.textContent).toBe('');
    expect(countryEl.textContent).toBe('');
    expect(latEl.textContent).toBe('');
    expect(lonEl.textContent).toBe('');
  });

  it('Location details will be populated upon calling the update location button', async () => {
    // Arrange
    const wrapper = render(
      <LocationProvider>
        <TestProviderChildComponent />
      </LocationProvider>,
    );

    // Action
    const updateLocationButton = await wrapper.findByTestId(
      'location-provider-update-button',
    );

    updateLocationButton.click();

    // Assert
    const cityEl = await wrapper.findByTestId('location-provider-city');
    const countryEl = await wrapper.findByTestId('location-provider-country');
    const latEl = await wrapper.findByTestId('location-provider-lat');
    const lonEl = await wrapper.findByTestId('location-provider-lon');

    expect(cityEl.textContent).toBe('Melbourne');
    expect(countryEl.textContent).toBe('Australia');
    expect(latEl.textContent).toBe('30');
    expect(lonEl.textContent).toBe('45');
  });
});
