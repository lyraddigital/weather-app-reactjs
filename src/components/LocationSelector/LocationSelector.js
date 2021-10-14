import { useEffect } from "react";
import { useLocationUpdater } from "../../hooks/useLocationUpdater";

export const LocationSelector = () => {
    const locationUpdate = useLocationUpdater();
    
    useEffect(() => {
        setTimeout(() => {
            locationUpdate({ lat: 51.5074, lon: 0.1278 });
        }, 5000)
    }, [locationUpdate]);

    return (
        <form>
            <div>Location Selector form</div>
        </form>
    );
}