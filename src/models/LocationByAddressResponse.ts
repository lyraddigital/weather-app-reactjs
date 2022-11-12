export interface LocationByAddressResponse {
  success: boolean;
  lat?: number;
  lon?: number;
  city?: string;
  country?: string;
  placeId?: string;
}
