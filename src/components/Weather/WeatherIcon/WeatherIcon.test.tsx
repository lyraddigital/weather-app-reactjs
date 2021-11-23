import { render } from '@testing-library/react';

import { WeatherType } from 'core';
import { WeatherIcon } from './WeatherIcon';

describe('WeatherIcon', () => {
    it('Returns null if no weatherType value is specified', async () => {
        // Arrange            
        const alt = 'Will not see this';

        // Action
        const wrapper = render(
            <WeatherIcon iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElements = (await wrapper.queryAllByAltText(alt) as Array<HTMLImageElement>);

        expect(imgElements.length).toBe(0);
    });

    it('Image is shown weatherType is set correctly', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Clear;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement).toBeTruthy();
    });

    it('Image class is empty when className is not set', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Clear;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.className).toBe('');
    });

    it('Image class is not empty when className is set', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Clear;
        const className = 'testClass';

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt } className={ className }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.className).toBe(className);
    });

    it('Alt attribute is set correctly on img tag', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Clear;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement).toBeTruthy();
        expect(imgElement.alt).toBe(alt);
    });

    it('Image src is correct when weatherType is Atmospheric', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Atmospheric;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/atmosphere.svg');
    });

    it('Image src is correct when weatherType is Clear', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Clear;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/clear.svg');
    });

    it('Image src is correct when weatherType is Clouds', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Clouds;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/cloudy.svg');
    });

    it('Image src is correct when weatherType is Drizzle', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Drizzle;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/drizzle.svg');
    });

    it('Image src is correct when weatherType is Rain', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Rain;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/rain.svg');
    });

    it('Image src is correct when weatherType is Shower', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Shower;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/shower.svg');
    });

    it('Image src is correct when weatherType is Snow', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Snow;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/snow.svg');
    });

    it('Image src is correct when weatherType is Thunderstorm', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherType = WeatherType.Thunderstorm;

        // Action
        const wrapper = render(
            <WeatherIcon weatherType={weatherType} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/thunder-storm.svg');
    });
});