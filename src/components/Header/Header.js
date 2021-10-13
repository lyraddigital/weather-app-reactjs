import { format } from "date-fns";

import style from './Header.module.scss';

export const Header = ({ location, date }) => {
    const formattedDate = format(date, 'eeee do LLLL');

    return (
        <div className={ style.locationAndDate }>
            <h1 className={ style.location }>{ location.city }, { location.country }</h1>
            <div>{ formattedDate }</div>
        </div>
    );
}