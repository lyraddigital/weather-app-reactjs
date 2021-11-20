import { useContext } from 'react';
import { render } from '@testing-library/react';

import { WeatherContext } from 'context';
import { WeatherProvider } from './WeatherProvider';

const TestProviderChildComponent = () => {
  const weatherApiResponse = useContext(WeatherContext);

  return <div></div>;
};

describe('WeatherProvider', () => {
  it('By default contains no location details', async () => {
    // Arrange / Action
    // const wrapper = render(
    //   <LocationProvider>
    //     <TestProviderChildComponent />
    //   </LocationProvider>,
    // );
    // // Assert
    // const cityEl = await wrapper.findByTestId('location-provider-city');
    // const countryEl = await wrapper.findByTestId('location-provider-country');
    // const latEl = await wrapper.findByTestId('location-provider-lat');
    // const lonEl = await wrapper.findByTestId('location-provider-lon');
    // expect(cityEl.textContent).toBe('');
    // expect(countryEl.textContent).toBe('');
    // expect(latEl.textContent).toBe('');
    // expect(lonEl.textContent).toBe('');
  });

  it('Location details will be populated upon calling the update location button', async () => {
    // // Arrange
    // const wrapper = render(
    //   <LocationProvider>
    //     <TestProviderChildComponent />
    //   </LocationProvider>,
    // );
    // // Action
    // const updateLocationButton = await wrapper.findByTestId(
    //   'location-provider-update-button',
    // );
    // updateLocationButton.click();
    // // Assert
    // const cityEl = await wrapper.findByTestId('location-provider-city');
    // const countryEl = await wrapper.findByTestId('location-provider-country');
    // const latEl = await wrapper.findByTestId('location-provider-lat');
    // const lonEl = await wrapper.findByTestId('location-provider-lon');
    // expect(cityEl.textContent).toBe('Melbourne');
    // expect(countryEl.textContent).toBe('Australia');
    // expect(latEl.textContent).toBe('30');
    // expect(lonEl.textContent).toBe('45');
  });
});
