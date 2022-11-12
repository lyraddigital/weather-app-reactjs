import { render, screen } from '@testing-library/react';

import { WeatherContext } from 'context';

import { useWeatherLoading } from './useWeatherLoading';

const TempLoadingChild = () => {
  const { isLoading, isFirstLoad } = useWeatherLoading();
  const loadingEl = isLoading ? <div>Loading</div> : null;
  const firstLoadEl = isFirstLoad ? <div>First Load</div> : null;

  return (
    <>
      {loadingEl}
      {firstLoadEl}
    </>
  );
};

describe('useWeatherLoading', () => {
  it('Hooks returns correct values for isLoading and isFirstLoad when isLoading is true, and isFirstLoad is false.', () => {
    // Arrange
    const isLoading = true;
    const isFirstLoad = false;

    // Action
    render(
      <WeatherContext.Provider value={{ isFirstLoad, isLoading }}>
        <TempLoadingChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const loadingEl = screen.queryByText('Loading');
    const firstLoadEl = screen.queryByText('First Load');

    expect(loadingEl).toBeTruthy();
    expect(firstLoadEl).toBeFalsy();
  });

  it('Hooks returns correct values for isLoading and isFirstLoad when isLoading is false, and isFirstLoad is true.', () => {
    // Arrange
    const isLoading = false;
    const isFirstLoad = true;

    // Action
    render(
      <WeatherContext.Provider value={{ isFirstLoad, isLoading }}>
        <TempLoadingChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const loadingEl = screen.queryByText('Loading');
    const firstLoadEl = screen.queryByText('First Load');

    expect(loadingEl).toBeFalsy();
    expect(firstLoadEl).toBeTruthy();
  });

  it('Hooks returns correct values for isLoading and isFirstLoad when isLoading is true, and isFirstLoad is true.', () => {
    // Arrange
    const isLoading = true;
    const isFirstLoad = true;

    // Action
    render(
      <WeatherContext.Provider value={{ isFirstLoad, isLoading }}>
        <TempLoadingChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const loadingEl = screen.queryByText('Loading');
    const firstLoadEl = screen.queryByText('First Load');

    expect(loadingEl).toBeTruthy();
    expect(firstLoadEl).toBeTruthy();
  });

  it('Hooks returns correct values for isLoading and isFirstLoad when isLoading is false, and isFirstLoad is false.', () => {
    // Arrange
    const isLoading = false;
    const isFirstLoad = false;

    // Action
    render(
      <WeatherContext.Provider value={{ isFirstLoad, isLoading }}>
        <TempLoadingChild />
      </WeatherContext.Provider>,
    );

    // Assert
    const loadingEl = screen.queryByText('Loading');
    const firstLoadEl = screen.queryByText('First Load');

    expect(loadingEl).toBeFalsy();
    expect(firstLoadEl).toBeFalsy();
  });
});
