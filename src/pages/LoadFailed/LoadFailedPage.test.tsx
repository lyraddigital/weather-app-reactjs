import { render, screen } from '@testing-library/react';

import { LoadFailedPage } from './LoadFailedPage';

describe('LoadFailedPage', () => {
  it('Shows the correct message content', () => {
    // Arrange / Action
    render(<LoadFailedPage />);

    // Assert
    const h1El = screen.getByRole('heading', { level: 1 });
    const messageEl = screen.getByText(
      'Could not load latest weather. Please call administration.',
    );

    expect(h1El.textContent).toBe('Weather load failed');
    expect(messageEl.tagName).toBe('P');
  });
});
