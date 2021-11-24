import { render } from '@testing-library/react';

import { Loader } from './Loader';

describe('Loader', () => {
    it('Renders no loading message if the loading property is false', () => {
        // Arrange
        const isLoading = false;

        // Action
        const wrapper = render(
            <Loader isLoading={isLoading}></Loader>
        );

        // Assert
        const loaderDivs = wrapper.queryAllByDisplayValue('Loading Weather data');

        expect(loaderDivs.length).toBe(0);
    });

    it('Renders a loading message if the loading property is true', () => {
        // Arrange
        const isLoading = true;

        // Action
        const wrapper = render(
            <Loader isLoading={isLoading}></Loader>
        );

        // Assert
        const loaderDiv = wrapper.findByDisplayValue('Loading Weather data');

        expect(loaderDiv).toBeTruthy();
    });
});