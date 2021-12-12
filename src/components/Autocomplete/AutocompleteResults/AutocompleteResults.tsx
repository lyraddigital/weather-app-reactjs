import style from './AutocompleteResults.module.scss';

interface AutocompleteResultsProps {
  suggestions: any;
  getSuggestionItemProps: any;
}

export const AutocompleteResults = ({
  suggestions,
  getSuggestionItemProps,
}: AutocompleteResultsProps): JSX.Element => {
  return (
    <ul className={style.autoCompleteList}>
      {suggestions.map((s: any, i: number) => {
        return (
          <li {...getSuggestionItemProps(s)} key={i}>
            {s.description}
          </li>
        );
      })}
    </ul>
  );
};
