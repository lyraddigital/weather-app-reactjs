import { render } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader', () => {
  it('Renders no loading message if the loading property is false', () => {
    // Arrange
    const isLoading = false;

    // Action
    const wrapper = render(<Loader isLoading={isLoading}></Loader>);

    // Assert
    const loaderDivs = wrapper.queryAllByTestId('loader');

    expect(loaderDivs.length).toBe(0);
  });

  it('Renders the correct messages if the loading property is true', async () => {
    // Arrange
    const isLoading = true;

    // Action
    const wrapper = render(<Loader isLoading={isLoading}></Loader>);

    // Assert
    const loaderMessage1Div = await wrapper.findByTestId('loader-message-1');
    const loaderMessage2Div = await wrapper.findByTestId('loader-message-2');

    expect(loaderMessage1Div.textContent).toBe('Loading Weather data');
    expect(loaderMessage2Div.textContent).toBe('Please wait.');
  });
});
