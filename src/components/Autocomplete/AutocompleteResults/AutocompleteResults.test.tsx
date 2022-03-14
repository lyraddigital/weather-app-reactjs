import { render, screen } from '@testing-library/react';
import { Suggestion } from 'react-places-autocomplete';

import {
  AutocompleteResults,
  AutocompleteSuggestionItem,
} from './AutocompleteResults';

describe('AutocompleteResults', () => {
  it('Renders a correct list of suggestions', () => {
    // Arrange
    const suggestions = [
      {
        description: 'Displayed Suggestion 1',
      },
      {
        description: 'Displayed Suggestion 2',
      },
    ] as Array<Suggestion>;
    const getSuggestionItemProps = (): AutocompleteSuggestionItem => {
      return {
        key: 1,
        id: '1',
        role: 'option',
        onMouseEnter: () => {
          /* Do nothing */
        },
        onMouseLeave: () => {
          /* Do nothing */
        },
        onMouseUp: () => {
          /* Do nothing */
        },
        onMouseDown: () => {
          /* Do nothing */
        },
        onTouchStart: () => {
          /* Do nothing */
        },
        onTouchEnd: () => {
          /* Do nothing */
        },
        onClick: () => {
          /* Do nothing */
        },
      };
    };

    // Action
    const { container } = render(
      <AutocompleteResults
        getSuggestionItemProps={getSuggestionItemProps}
        suggestions={suggestions}
      />,
    );

    // Assert
    const unorderedListEl = container.querySelector('.autoCompleteList');
    const listItemCount = unorderedListEl?.children.length;
    const listItemOne = screen.getByText(suggestions[0].description);
    const listItemTwo = screen.getByText(suggestions[1].description);

    expect(listItemCount).toBe(2);
    expect(unorderedListEl?.children.item(0)).toBe(listItemOne);
    expect(unorderedListEl?.children.item(1)).toBe(listItemTwo);
  });
});
