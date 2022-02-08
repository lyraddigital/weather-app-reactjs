import { Configuration, GOOGLE_PLACE_PHOTOS_URL } from 'core';

import { useLocation } from './useLocation';

export const useLocationImage = (): string | undefined => {
  const location = useLocation();
  const googlePlacesApiKey = Configuration.googlePlacesApiKey;
  const maxPhotoWidth = 1000;
  let photoReferenceId = location?.photoReferenceId;
  photoReferenceId =
    'Aap_uEA7vb0DDYVJWEaX3O-AtYp77AaswQKSGtDaimt3gt7QCNpdjp1BkdM6acJ96xTec3tsV_ZJNL_JP-lqsVxydG3nh739RE_hepOOL05tfJh2_ranjMadb3VoBYFvF0ma6S24qZ6QJUuV6sSRrhCskSBP5C1myCzsebztMfGvm7ij3gZT';

  if (!photoReferenceId) {
    return undefined;
  }

  return `${GOOGLE_PLACE_PHOTOS_URL}?maxwidth=${maxPhotoWidth}&photo_reference=${photoReferenceId}&key=${googlePlacesApiKey}`;
};
