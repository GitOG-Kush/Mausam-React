import React from 'react'
import { DateTime } from 'luxon';
export default function TimeLocation(props) {
    const {time, location} = props;
    const dt = DateTime.fromSeconds(time).toLocaleString({ weekday: 'long', month: 'long', day: 'numeric', hour:'numeric',});
    return (
        <div className='container'>
            <ul className='list-group list-group-flush '>
                <li className="list-group-item time">{dt}</li>
                <li className="list-group-item location">{location}</li>
            </ul>
        </div>
    )
}
