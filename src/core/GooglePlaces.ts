import { geocodeByAddress } from 'react-places-autocomplete';

export const getLocationByAddress = async (address: string) => {
  try {
    const response = await geocodeByAddress(address);

    if (response && response.length > 0) {
      const addressDetails = response[0];
      const coords = addressDetails.geometry.location;
      const lat = coords.lat();
      const lon = coords.lng();
      const city =
        addressDetails.address_components.find((ac) =>
          ac.types.includes('locality'),
        )?.long_name || '';
      const country =
        addressDetails.address_components.find((ac) =>
          ac.types.includes('country'),
        )?.long_name || '';

      return { lat, lon, city, country, success: true };
    } else {
      return { success: false };
    }
  } catch {
    return { success: false };
  }
};
