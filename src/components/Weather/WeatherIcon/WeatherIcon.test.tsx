import { render } from '@testing-library/react';

import { WeatherIcon } from './WeatherIcon';

describe('WeatherIcon', () => {
    it('Returns null if weatherId is not a valid value', async () => {
        // Arrange            
        const alt = 'Will not see this';
        const weatherId = -1;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElements = (await wrapper.queryAllByAltText(alt) as Array<HTMLImageElement>);

        expect(imgElements.length).toBe(0);
    });

    it('Image is shown weatherType is set correctly', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 500;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement).toBeTruthy();
    });

    it('Image class is empty when className is not set', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 500;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.className).toBe('');
    });

    it('Image class is not empty when className is set', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 500;
        const className = 'testClass';

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt } className={ className }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.className).toBe(className);
    });

    it('Alt attribute is set correctly on img tag', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 500;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement).toBeTruthy();
        expect(imgElement.alt).toBe(alt);
    });

    it('Image src is correct when weatherId an Atmospheric one', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 701;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/atmosphere.svg');
    });

    it('Image src is correct when weatherId is a Clear one', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 800;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/clear.svg');
    });

    it('Image src is correct when weatherId is a Clouds one', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 801;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/cloudy.svg');
    });

    it('Image src is correct when weatherId is a Drizzle one', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 301;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/drizzle.svg');
    });

    it('Image src is correct when weatherId is Rain one', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 502;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/rain.svg');
    });

    it('Image src is correct when weatherId is a Shower one', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 520;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/shower.svg');
    });

    it('Image src is correct when weatherId is a Snow one', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 602;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/snow.svg');
    });

    it('Image src is correct when weatherId is Thunderstorm one', async () => {
        // Arrange            
        const alt = 'Some alt value';
        const weatherId = 201;

        // Action
        const wrapper = render(
            <WeatherIcon weatherId={weatherId} iconAlt={ alt }></WeatherIcon>
        );

        // Assert
        const imgElement = (await wrapper.findByAltText(alt) as HTMLImageElement);

        expect(imgElement.src).toBe('http://localhost/thunder-storm.svg');
    });
});