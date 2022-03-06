import { geocodeByAddress } from 'react-places-autocomplete';

import { LocationByAddressResponse } from 'models';

export const getLocationByAddress = async (
  address: string,
): Promise<LocationByAddressResponse> => {
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
  } catch {
    return { success: false };
  }
};

export const getPhotoReferenceForLocation = async (
  placeId?: string,
): Promise<string> => {
  return new Promise((resolve) => resolve(placeId || ''));
};
