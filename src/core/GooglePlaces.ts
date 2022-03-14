import { geocodeByAddress } from 'react-places-autocomplete';

import { LocationByAddressResponse } from 'models';
import { cityGeocodes } from './apis/Google/mocks/CityGeocodes';

import { getConfiguration } from './Configuration';

const getLocationByAddressFromFiles = (
  address: string,
): LocationByAddressResponse => {
  return cityGeocodes[address];
};

export const getLocationByAddress = async (
  address: string,
): Promise<LocationByAddressResponse> => {
  const configuration = getConfiguration();

  if (configuration.isUsingInMemoryApis) {
    return getLocationByAddressFromFiles(address);
  }

  try {
    const response = await geocodeByAddress(address);

    if (response && response.length > 0) {
      const addressDetails = response[0];
      const coords = addressDetails.geometry.location;
      const lat = coords.lat();
      const lon = coords.lng();
      const placeId = addressDetails.place_id;
      const city =
        addressDetails.address_components.find((ac) =>
          ac.types.includes('locality'),
        )?.long_name || '';
      const country =
        addressDetails.address_components.find((ac) =>
          ac.types.includes('country'),
        )?.long_name || '';

      return { lat, lon, city, country, placeId, success: true };
    } else {
      return { success: false };
    }
  } catch (e) {
    return { success: false };
  }
};
