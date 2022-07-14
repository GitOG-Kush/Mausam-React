import React from 'react'
import { DateTime } from 'luxon';
import { BsDroplet, BsDropletFill, BsDropletHalf, BsSunFill, BsMoonStarsFill, BsThermometerHalf, BsWind } from "react-icons/bs"
// import Icons from './Icons';

export default function Weather(props) {
    const { iconCode, condition, currTemp, feelsLike, humid, sunrise, sunset, windSpeed, unit } = props;

    let windUnit = "";
    if (unit === "metric")
        windUnit = 'km/h';
    else if (unit === 'imperial')
        windUnit = "mph";

    function setRiseTime(e) {
        let dt = DateTime.fromSeconds(e).toLocaleString({ hour: 'numeric', minute: 'numeric' });
        return dt;
    }

    const imgUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`
    return (
        <>
            <div className="C3-G1 d-flex justify-content-between flex-row my-1">
                <div className="weather conditions d-flex flex-column justify-content-center align-items-center p-1">
                    {/* <Icons iconCode={iconCode} /> */}
                    <img src={imgUrl} className='mb-1' style={{ color: 'white' }} alt="icon" />
                    <h3 className="d-flex condition flex-column justify-content-center align-items-center my-1">{condition}</h3>
                </div>

                <h1 className='weather currtemp d-flex flex-column justify-content-center align-items-center my-0 p-1'>{currTemp}&deg;</h1>

                <div className="weather feels d-flex flex-column justify-content-center p-1" >
                    <div className='feel d-flex align-items-center p-1'>
                        {<BsThermometerHalf className='me-2' />} <span className='additional me-1'>Feels like:</span> {feelsLike}&deg;
                    </div>
                    <div className='feel d-flex align-items-center p-1'>
                        {humid <= 40 ? <BsDroplet className='me-2' /> : humid > 40 && humid <= 70 ? <BsDropletHalf className='me-2' /> : <BsDropletFill className='me-2' />} <span className='additional me-1'>Humidity:</span> {humid}%
                    </div>
                    <div className='feel d-flex align-items-center p-1'>
                        {<BsWind className='me-2' />} <span className='additional me-1'>Wind Speed:</span> {windSpeed} {windUnit}
                    </div>
                </div>
            </div>
            <div className="d-flex rise-set justify-content-evenly my-1">
                <div className=""><BsSunFill className='me-1' /> {setRiseTime(sunrise)}</div>
                <div className=""><BsMoonStarsFill className='me-1' /> {setRiseTime(sunset)}</div>
            </div>
            <hr />
        </>
    )
}
