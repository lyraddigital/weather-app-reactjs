import PlacesAutocomplete from 'react-places-autocomplete';

import { AutocompleteInput } from '../AutocompleteInput';
import { AutocompleteResults } from '../AutocompleteResults';

import style from './CitiesAutocomplete.module.scss';

interface CitiesAutocompleteProps {
  cityName: string;
  setCityName: (cityName: string) => void;
  selectCity: (city: string) => void;
}

export const CitiesAutocomplete = ({
  cityName,
  setCityName,
  selectCity,
}: CitiesAutocompleteProps): JSX.Element => {
  return (
    <PlacesAutocomplete
      value={cityName}
      onChange={setCityName}
      onSelect={selectCity}
      searchOptions={{
        types: ['(cities)'],
      }}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className={style.autoCompleteContainer}>
          <AutocompleteInput inputProps={getInputProps} isLoading={loading} />
          <AutocompleteResults
            suggestions={suggestions.map((s) => s)}
            getSuggestionItemProps={getSuggestionItemProps}
          />
        </div>
      )}
    </PlacesAutocomplete>
  );
};
