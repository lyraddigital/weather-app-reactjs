import { render } from '@testing-library/react';

import { CurrentTemperature } from './CurrentTemperature';

describe('CurrentTemperature', () => {
  it('Shows a blank interface if temp and weatherId is undefined', () => {
    // Arrange / Action
    const { container } = render(<CurrentTemperature />);

    // Assert
    const tempEl = container.querySelector('.value');
    const weatherSummaryEl = container.querySelector('.summary');

    expect(tempEl?.textContent).toBe('\u00b0');
    expect(weatherSummaryEl?.textContent).toBe('');
  });

  it('Shows the correct data when the temp and weatherId is not set', () => {
    // Arrange
    const temp = 5;
    const weatherId = 800;

    // Action
    const { container } = render(
      <CurrentTemperature temp={temp} weatherId={weatherId} />,
    );

    // Assert
    const tempEl = container.querySelector('.value');
    const weatherSummaryEl = container.querySelector('.summary');

    expect(tempEl?.textContent).toBe(`${temp.toString()}\u00b0`);
    expect(weatherSummaryEl?.textContent).toBe('Clear');
  });
});
