import { render, RenderResult, screen, waitFor } from '@testing-library/react';

import { WeatherContext } from 'context';

import { WeatherThemedLayout } from './WeatherThemedLayout';

const renderWithWeather = (
  children: JSX.Element,
  isLoading: boolean,
  isFirstLoad: boolean,
): Promise<RenderResult> => {
  return waitFor(() =>
    render(
      <WeatherContext.Provider value={{ isLoading, isFirstLoad }}>
        {children}
      </WeatherContext.Provider>,
    ),
  );
};

describe('WeatherThemedLayout', () => {
  it('Renders the correct layout details if loading is false', async () => {
    // Arrange / Action
    const { container } = await renderWithWeather(
      <WeatherThemedLayout>
        <div>Default Layout Child</div>
      </WeatherThemedLayout>,
      false,
      false,
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

  it('Renders loading message only if loading is set to true and first load is set to true', async () => {
    // Arrange / Action
    await renderWithWeather(
      <WeatherThemedLayout>
        <div>Default Layout Child</div>
      </WeatherThemedLayout>,
      true,
      true,
    );

    // Assert
    const loadingWeatherDataEl = screen.queryByText('Loading Weather data');
    const childTextEl = screen.queryByText('Default Layout Child');

    expect(loadingWeatherDataEl).toBeTruthy();
    expect(childTextEl).toBeFalsy();
  });

  it('Renders loading message over content if loading is set to true and first load is set to false', async () => {
    // Arrange / Action
    await renderWithWeather(
      <WeatherThemedLayout>
        <div>Default Layout Child</div>
      </WeatherThemedLayout>,
      true,
      false,
    );

    // Assert
    const loadingWeatherDataEl = screen.queryByText('Loading Weather data');
    const childTextEl = screen.queryByText('Default Layout Child');

    expect(loadingWeatherDataEl).toBeTruthy();
    expect(childTextEl).toBeTruthy();
  });

  it('Renders the content if loading is set to false and first load is set to false', async () => {
    // Arrange / Action
    await renderWithWeather(
      <WeatherThemedLayout>
        <div>Default Layout Child</div>
      </WeatherThemedLayout>,
      false,
      false,
    );

    // Assert
    const loadingWeatherDataEl = screen.queryByText('Loading Weather data');
    const childTextEl = screen.queryByText('Default Layout Child');

    expect(loadingWeatherDataEl).toBeFalsy();
    expect(childTextEl).toBeTruthy();
  });
});
