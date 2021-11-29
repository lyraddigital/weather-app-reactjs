import { render } from '@testing-library/react';

import { LoadFailedPage } from './LoadFailedPage';

describe('LoadFailedPage', () => {
  it('Shows the correct message content', async () => {
    // Arrange / Action
    const wrapper = render(<LoadFailedPage />);

    // Assert
    const h1El = await wrapper.findByTestId('loader-error-heading');
    const messageEl = await wrapper.findByTestId('loader-error-message');

    expect(h1El.tagName).toBe('H1');
    expect(h1El.textContent).toBe('Weather load failed');
    expect(messageEl.tagName).toBe('P');
    expect(messageEl.textContent).toBe(
      'Could not load latest weather. Please call administration.',
    );
  });
});
