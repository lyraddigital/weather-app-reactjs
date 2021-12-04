import { render } from '@testing-library/react';

import { CurrentTemperature } from './CurrentTemperature';

describe('CurrentTemperature', () => {
  it('Shows a blank interface if temp and weatherId is undefined', async () => {
    // Arrange / Action
    const wrapper = render(<CurrentTemperature />);

    // Assert
    const tempEl = await wrapper.findByTestId('current-weather-temp');
    const weatherSummaryEl = await wrapper.findByTestId(
      'current-weather-summary',
    );

    expect(tempEl.textContent).toBe('\u00b0');
    expect(weatherSummaryEl.textContent).toBe('');
  });

  it('Shows the correct data when the temp and weatherId is not set', async () => {
    // Arrange
    const temp = 5;
    const weatherId = 800;

    // Action
    const wrapper = render(
      <CurrentTemperature temp={temp} weatherId={weatherId} />,
    );

    // Assert
    const tempEl = await wrapper.findByTestId('current-weather-temp');
    const weatherSummaryEl = await wrapper.findByTestId(
      'current-weather-summary',
    );

    expect(tempEl.textContent).toBe(`${temp.toString()}\u00b0`);
    expect(weatherSummaryEl.textContent).toBe('Clear');
  });
});
