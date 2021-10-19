import { useContext } from "react";

import { LocationContext } from "../core/LocationContext";

export const useLocation = () => {
    const { location } = useContext(LocationContext);
    return location;
}