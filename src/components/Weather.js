import React from 'react'
import { DateTime } from 'luxon';

export default function Weather(props) {

    function setRiseTime(e) {

        let dt = DateTime.fromSeconds(e).toLocaleString({ hour: 'numeric', minute: 'numeric' });
        return dt;
    }

    const { iconCode, condition, currTemp, feelsLike, humid, sunrise, sunset } = props
    const imgUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    return (
        <div className='container'>
            <div className="container d-flex justify-content-center">
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '33%' }}>
                    <div className=""><img src={imgUrl} alt="icon" /></div>
                    <div className="">{condition}</div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center" style={{ width: '33%' }}>
                    <div className="">{currTemp}&deg;</div>
                </div>
                <div className="d-flex flex-column justify-content-center" style={{ width: '33%' }}>
                    <div className="">
                        <i className='uil uil-sun'>
                        </i>
                        {feelsLike}&deg;
                    </div>
                    <div className="">{humid}%</div>
                </div>
            </div>
            <div className="container d-flex justify-content-center">
                <div className="col">{setRiseTime(sunrise)}</div>
                <div className="col">{setRiseTime(sunset)}</div>
            </div>
        </div>
    )
}
