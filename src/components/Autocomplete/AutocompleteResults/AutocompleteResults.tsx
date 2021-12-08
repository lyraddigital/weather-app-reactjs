import style from './AutocompleteResults.module.scss';

// interface AutocompleteInputProps {
//     inputProps: any;
//     isLoading: boolean;
// }

export const AutocompleteResults = ({ suggestions, getSuggestionItemProps }: any): JSX.Element => {
    return (
        <ul className={style.autoCompleteList}>
            {suggestions.map((s: any) => {
                return (
                <li
                    {...getSuggestionItemProps(s, {
                    className: 'suggestion-item',
                    })}
                    key={s.id}
                >
                    {s.description}
                </li>
                );
            })}
        </ul>
    );
}