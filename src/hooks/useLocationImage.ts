import { Configuration, GOOGLE_PLACE_PHOTOS_URL } from 'core';

import { useLocation } from './useLocation';

export const useLocationImage = (): string | undefined => {
  const location = useLocation();
  const googlePlacesApiKey = Configuration.googlePlacesApiKey;
  const maxPhotoWidth = 1000;
  const photoReferenceId = location?.photoReferenceId;

  if (!photoReferenceId) {
    return undefined;
  }

  return `${GOOGLE_PLACE_PHOTOS_URL}?maxwidth=${maxPhotoWidth}&photo_reference=${photoReferenceId}&key=${googlePlacesApiKey}`;
};