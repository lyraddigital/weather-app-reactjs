import { useState } from "react";

import { LocationContext } from "../../core/LocationContext";

export const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState();

    return (
        <LocationContext.Provider value={ { updateLocation: setLocation, location } }>
            { children }
        </LocationContext.Provider>
    );
}