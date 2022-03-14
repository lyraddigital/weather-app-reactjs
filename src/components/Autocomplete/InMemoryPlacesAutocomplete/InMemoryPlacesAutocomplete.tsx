import { useEffect, useState } from 'react';

import { getCitiesByName } from 'core/apis/Google/GoogleMockApi';

import style from './InMemoryPlacesAutocomplete.module.scss';

interface InMemoryPlacesAutocompleteProps {
  cityName: string;
  setCityName: (cityName: string) => void;
  selectCity: (city: string) => void;
}

export const InMemoryPlacesAutocomplete = ({
  cityName,
  setCityName,
  selectCity,
}: InMemoryPlacesAutocompleteProps): JSX.Element => {
  const [results, setResults] = useState<Array<string> | undefined>(undefined);

  useEffect(() => {
    if (cityName && cityName.trim().length > 0) {
      const cities = getCitiesByName(cityName);
      setResults(cities);
    } else {
      setResults(undefined);
    }
  }, [cityName]);

  const resultsEl = results ? (
    <ul className={style.autoCompleteList}>
      {results.map((name: string, index: number) => (
        <li key={index} onClick={() => selectCity(name)}>
          {name}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div className={style.autoCompleteContainer}>
      <input
        className={style.autoCompleteInput}
        onChange={(e) => setCityName(e.target.value)}
        value={cityName}
      />
      {resultsEl}
    </div>
  );
};
