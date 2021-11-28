import { render } from "@testing-library/react";

import { LoadFailedPage } from "./LoadFailedPage";

describe('LoadFailedPage', () => {
  it('Shows the correct message content', async () => {
    // Arrange / Action
    const wrapper = render(<LoadFailedPage />);

    // Assert
    const h1El = await wrapper.findByText('Weather load failed');
    const messageEl = await wrapper.findByText('Could not load latest weather. Please call administration.');

    expect(h1El.tagName).toBe('H1');
    expect(messageEl.tagName).toBe('P');
  });
});