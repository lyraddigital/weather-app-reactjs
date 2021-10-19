import { useEffect, useState } from "react";
import axios from 'axios';

import { LOCATION_API_URL } from 'core/Contants';
import { Configuration } from "core/Configuration";
import { useLocationUpdater } from "hooks/useLocationUpdater";
import { Redirect } from "react-router";

export const LocationPage = () => {
    const [locationSelected, setLocationSelected] = useState(false);
    const updateLocation = useLocationUpdater(); 

    useEffect(() => {
        axios.get(`${LOCATION_API_URL}?q=New%20York&appid=${Configuration.apiKey}`).then(
            response => {
                if (response?.data?.length > 0) {
                    updateLocation({
                        city: response.data[0].name,
                        country: response.data[0].country,
                        lat: response.data[0].lat,
                        lon: response.data[0].lon
                    });
                    setLocationSelected(true);
                }
            }
        );
    }, [updateLocation]);

    if (locationSelected) {
        return <Redirect to="/" />;
    }

    return (
        <div>Location Page</div>
    );
}