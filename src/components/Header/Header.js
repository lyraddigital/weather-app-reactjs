import { format } from "date-fns";

export const Header = ({ location, date }) => {
    const formattedDate = format(date, 'eeee do LLLL');

    return (
        <div className="location-and-date">
            <h1 className="location-and-date__location">{ location.city }, { location.country }</h1>
            <div>{ formattedDate }</div>
        </div>
    );
}