import { render, screen } from '@testing-library/react';

import { useLocationUpdater } from 'hooks';
import { LocationContext } from 'context';
import { LocationStore, WeatherLocation } from 'models';
import { useState } from 'react';

const TempLocationChild = () => {
  const locationUpdater = useLocationUpdater();
  const [canUpdateLocation, setCanUpdateLocation] = useState<boolean>(false);

  const updateLocation = () => {
    if (locationUpdater) {
      setCanUpdateLocation(true);
    }
  };
  const updateLocationEl = canUpdateLocation ? (
    <div data-testid="update-location-message">Location was updated</div>
  ) : null;

  return (
    <>
      {updateLocationEl}
      <button data-testid="update-location-button" onClick={updateLocation}>
        Update Location
      </button>
    </>
  );
};

describe('useLocationUpdater', () => {
  it('Exists and can be called when LocationStore is defined', () => {
    // Arrange
    const locationUpdater: (location: WeatherLocation) => void = () => {
      // Do nothing
    };
    const store: LocationStore = {
      location: undefined,
      updateLocation: locationUpdater,
    };

    // Action
    render(
      <LocationContext.Provider value={store}>
        <TempLocationChild />
      </LocationContext.Provider>,
    );

    const button = screen.getByTestId('update-location-button');
    button.click();

    // Assert
    const locationMessages = screen.queryAllByTestId('update-location-message');

    expect(locationMessages.length).toBe(1);
  });

  it('Returns an undefined when the LocationStore is not defined', () => {
    // Arrange / Action
    render(
      <LocationContext.Provider value={undefined}>
        <TempLocationChild />
      </LocationContext.Provider>,
    );

    const button = screen.getByTestId('update-location-button');
    button.click();

    // Assert
    const locationMessages = screen.queryAllByTestId('update-location-message');

    expect(locationMessages.length).toBe(0);
  });
});
