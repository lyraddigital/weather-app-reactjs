import { render, screen } from '@testing-library/react';

import { LocationPage } from './LocationPage';

describe('LocationPage', () => {
  it('Shows the correct page content', () => {
    // Arrange / Action
    render(<LocationPage />);

    // Assert
    const h1El = screen.getByRole('heading', { level: 1 });
    const paragraphEl = screen.getByText(
      'Please start typing your city name in the textbox below.',
    );

    expect(h1El.textContent).toBe('Choose Region');
    expect(paragraphEl.tagName).toBe('P');
  });
});
