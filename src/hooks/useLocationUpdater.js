import { useContext } from "react"

import { LocationContext } from "../core/LocationContext"

export const useLocationUpdater = () => {
    const { updateLocation } = useContext(LocationContext);
    return updateLocation;
}