import React from 'react'
import { DateTime } from 'luxon';
export default function TimeLocation(props) {
    const dt = DateTime.now(props.time).toLocaleString({ weekday: 'long', month: 'long', day: 'numeric', hour:'numeric' });
    console.log(dt);
    return (
        <div className='container'>
            <ul className='list-group list-group-flush '>
                <li className="list-group-item time">{dt}</li>
                <li className="list-group-item location">{props.location}</li>
            </ul>
        </div>
    )
}
