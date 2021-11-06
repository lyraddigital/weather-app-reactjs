import { useContext } from "react";

import { LocationContext } from 'core';

export const useLocation = () => {
    const { location } = useContext(LocationContext);
    return location;
}