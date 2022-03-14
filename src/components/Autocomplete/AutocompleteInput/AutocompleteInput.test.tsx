import { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { render, screen } from '@testing-library/react';

import { AutocompleteInput, HtmlInputProps } from './AutocompleteInput';

describe('AutocompleteInput', () => {
  it('Renders the correct input attributes for the search input', () => {
    // Arrange
    const inputProps = (
      htmlInputProps: HtmlInputProps,
    ): DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > => {
      return {
        ...htmlInputProps,
      };
    };

    // Action
    render(<AutocompleteInput inputProps={inputProps} isLoading={false} />);

    // Assert
    const inputEl = screen.getByPlaceholderText('Search Places ...');

    expect(inputEl.className).toBe('autoCompleteInput');
  });

  it('Renders the loader when isLoading is true', () => {
    // Arrange
    const inputProps = (
      htmlInputProps: HtmlInputProps,
    ): DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > => {
      return {
        ...htmlInputProps,
      };
    };

    // Action
    const { container } = render(
      <AutocompleteInput inputProps={inputProps} isLoading={true} />,
    );

    // Assert
    const loadingIconEl = container.querySelector('.loadingIcon');

    expect(loadingIconEl).toBeTruthy();
  });

  it('Does not render the loader when isLoading is false', () => {
    // Arrange
    const inputProps = (
      htmlInputProps: HtmlInputProps,
    ): DetailedHTMLProps<
      InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    > => {
      return {
        ...htmlInputProps,
      };
    };

    // Action
    const { container } = render(
      <AutocompleteInput inputProps={inputProps} isLoading={false} />,
    );

    // Assert
    const loadingIconEl = container.querySelector('.loadingIcon');

    expect(loadingIconEl).toBeFalsy();
  });
});
