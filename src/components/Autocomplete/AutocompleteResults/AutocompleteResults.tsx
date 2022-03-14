import { Suggestion } from 'react-places-autocomplete';

import style from './AutocompleteResults.module.scss';

export interface AutocompleteSuggestionItem {
  key: number;
  id: string | undefined;
  role: 'option';
  onMouseEnter: React.MouseEventHandler;
  onMouseLeave: React.MouseEventHandler;
  onMouseDown: React.MouseEventHandler;
  onMouseUp: React.MouseEventHandler;
  onTouchStart: React.TouchEventHandler;
  onTouchEnd: React.TouchEventHandler;
  onClick: React.MouseEventHandler;
}

interface AutocompleteResultsProps {
  suggestions: Array<Suggestion>;
  getSuggestionItemProps: (
    suggestion: Suggestion,
  ) => AutocompleteSuggestionItem;
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
