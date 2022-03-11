import { geocodeByAddress } from 'react-places-autocomplete';

import { getLocationByAddress } from './GooglePlaces';

type MockedGeocodeByAddress = jest.MockedFunction<typeof geocodeByAddress>;
jest.mock('react-places-autocomplete');

describe('GooglePlaces', () => {
  it('getLocationByAddress returns a failed result if the underlying geocodeByAddress method returns an empty array', async () => {
    // Arrange
    const someAddress = '123 Some Place, Aussieland';
    
    (geocodeByAddress as MockedGeocodeByAddress).mockImplementationOnce(
      () => Promise.resolve([])
    );

    // Action
    const { success } = await getLocationByAddress(someAddress);

    // Assert
    expect(success).toBeFalsy();
  });

  it('getLocationByAddress returns a failure result, if there is an exception', async () => {
    // Arrange
    const someAddress = '123 Some Place, Aussieland';
    
    // Incomplete payload for the geocodeByAddress method response
    // this will lead to the code throwing an error returning a success
    // of false
    const geocodeResult: Partial<google.maps.GeocoderResult> = {
      address_components: []
    };

    (geocodeByAddress as MockedGeocodeByAddress).mockImplementationOnce(
      () => Promise.resolve([geocodeResult as google.maps.GeocoderResult])
    );
    
    // Action
    const { success } = await getLocationByAddress(someAddress);

    // Assert
    expect(success).toBeFalsy();
  });

  it('getLocationByAddress returns a success result, if the underlying geocodeByAddress method returns an array with valid data', async () => {
    // Arrange
    const someAddress = '123 Some Place, Aussieland';
    const expectedCity = 'Sydney';
    const expectedCountry = 'Austraia';
    const expectedLat = 10;
    const expectedLng = 40;
    const expectedPlaceId = 'place29383';
    const cityComponent: Partial<google.maps.GeocoderAddressComponent> = {
      long_name: expectedCity,
      types: ['locality']
    };
    const countryComponent: Partial<google.maps.GeocoderAddressComponent> = {
      long_name: expectedCountry,
      types: ['country']
    };
    const latLng: Partial<google.maps.LatLng> = {
      lat: () => expectedLat,
      lng: () => expectedLng
    };
    const geometry: Partial<google.maps.GeocoderGeometry> = {
      location: latLng as google.maps.LatLng
    };
    const geocodeResult: Partial<google.maps.GeocoderResult> = {
      place_id: expectedPlaceId,
      address_components: [
        cityComponent as google.maps.GeocoderAddressComponent,
        countryComponent as google.maps.GeocoderAddressComponent
      ],
      geometry: geometry as google.maps.GeocoderGeometry
    };

    (geocodeByAddress as MockedGeocodeByAddress).mockImplementationOnce(
      () => Promise.resolve([geocodeResult as google.maps.GeocoderResult])
    );
    
    // Action
    const { success, lat, lon, city, country, placeId } = await getLocationByAddress(someAddress);

    // Assert
    expect(success).toBeTruthy();
    expect(lat).toBe(expectedLat);
    expect(lon).toBe(expectedLng);
    expect(city).toBe(expectedCity);
    expect(country).toBe(expectedCountry);
    expect(placeId).toBe(expectedPlaceId);
  });
});
