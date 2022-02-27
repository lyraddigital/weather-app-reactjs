import { Suggestion } from 'react-places-autocomplete';
import style from './AutocompleteResults.module.scss';

interface AutocompleteResultsProps {
  suggestions: Array<Suggestion>;
  getSuggestionItemProps: (suggestion: Suggestion) => unknown;
}

export const AutocompleteResults = (
  props: AutocompleteResultsProps,
): JSX.Element => {
  return (
    <ul className={style.autoCompleteList}>
      {props.suggestions.map((s: Suggestion, i: number) => {
        return (
          <li {...props.getSuggestionItemProps(s)} key={i}>
            {s.description}
          </li>
        );
      })}
    </ul>
  );
};
