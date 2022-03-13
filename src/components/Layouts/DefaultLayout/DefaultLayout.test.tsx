import { render, screen } from '@testing-library/react';

import { DefaultLayout } from './DefaultLayout';

describe('DefaultLayout', () => {
  it('Renders no loading message if the loading property is false', () => {
    // Arrange / Action
    const { container } = render(
      <DefaultLayout>
        <div>Default Layout Child</div>
      </DefaultLayout>,
    );

    // Assert
    const layoutContainerDiv = container.querySelector('.layoutContainer');
    const layoutInnerContainerDiv =
      layoutContainerDiv?.querySelector('.innerContainer');
    const layoutChildDiv = layoutInnerContainerDiv?.children[0];
    const layoutChild = screen.getByText('Default Layout Child');

    expect(layoutContainerDiv).toBeTruthy();
    expect(layoutInnerContainerDiv).toBeTruthy();
    expect(layoutChildDiv).toBeTruthy();
    expect(layoutChildDiv?.textContent).toEqual(layoutChild.textContent);
  });
});
