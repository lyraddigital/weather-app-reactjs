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
      {suggestions.map((s: any) => {
        return (
          <li {...getSuggestionItemProps(s)} key={s.id}>
            {s.description}
          </li>
        );
      })}
    </ul>
  );
};
