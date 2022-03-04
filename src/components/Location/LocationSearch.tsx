import { useState } from 'react';
import { Redirect } from 'react-router';

import { getLocationByAddress, getPhotoReferenceForLocation } from 'core';
import { useLocationUpdater } from 'hooks';

import { CitiesAutocomplete } from 'components/Autocomplete';

export const LocationSearch = (): JSX.Element => {
  const [cityName, setCityName] = useState<string>('');
  const [locationSelected, setLocationSelected] = useState(false);
  const updateLocation = useLocationUpdater();

  const selectCity = async (address: string): Promise<void> => {
    setCityName(address);

    if (updateLocation) {
      const response = await getLocationByAddress(address);

      if (response && response.success) {
        const photoReferenceId = await getPhotoReferenceForLocation(
          response.placeId,
        );

        updateLocation({
          lat: response.lat,
          lon: response.lon,
          city: response.city,
          country: response.country,
          photoReferenceId: photoReferenceId,
        });
      }
    }

    setLocationSelected(true);
  };

  if (locationSelected) {
    return <Redirect to="/" />;
  }

  return (
    <CitiesAutocomplete
      cityName={cityName}
      setCityName={setCityName}
      selectCity={selectCity}
    />
  );
};
