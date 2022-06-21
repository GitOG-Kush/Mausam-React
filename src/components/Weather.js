import React from 'react'
import { DateTime } from 'luxon';

export default function Weather(props) {

    function setRiseTime(e) {

        let dt = DateTime.now(e).toLocaleString({ hour: 'numeric', minute: 'numeric' });
        return dt;
    }

    const { iconCode, condition, currTemp, feelsLike, humid, sunrise, sunset } = props
    const imgUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    return (
        <div className='container'>
            <div className="container d-flex justify-content-center">
                <div className="col">
                    <div className=""><img src={imgUrl} alt="icon" /></div>
                    <div className="">{condition}</div>
                </div>
                <div className="col d-flex justify-content-center align-items-center">
                    <div className="">{currTemp}</div>
                </div>
                <div className="col">
                    <div className="">{feelsLike}</div>
                    <div className="">{humid}</div>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="col">{setRiseTime(sunrise)}</div>
                <div className="col">{setRiseTime(sunset)}</div>
            </div>
        </div>
    )
}
