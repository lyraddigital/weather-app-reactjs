import { render, screen } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader', () => {
  it('Renders no loading message if the loading property is false', () => {
    // Arrange
    const isLoading = false;

    // Action
    render(<Loader isLoading={isLoading}></Loader>);

    // Assert
    const loaderMessage1Div = screen.queryByText('Loading Weather data');
    const loaderMessage2Div = screen.queryByText('Please wait.');

    expect(loaderMessage1Div).toBeFalsy();
    expect(loaderMessage2Div).toBeFalsy();
  });

  it('Renders the correct messages if the loading property is true', () => {
    // Arrange
    const isLoading = true;

    // Action
    render(<Loader isLoading={isLoading}></Loader>);

    // Assert
    const loaderMessage1Div = screen.queryByText('Loading Weather data');
    const loaderMessage2Div = screen.queryByText('Please wait.');

    expect(loaderMessage1Div).toBeTruthy();
    expect(loaderMessage2Div).toBeTruthy();
  });
});
