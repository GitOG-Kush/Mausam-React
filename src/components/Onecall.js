import React from 'react'
import { DateTime } from 'luxon';
export default function Onecall(props) {
    const { hourly, daily } = props;

    return (
        <>
            <div className="hourly d-flex flex-row my-5 justify-content-between">
                {hourly.slice(1, 7).map((element) => {
                    const imgUrl = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
                    return (
                        <div className='d-flex flex-column justify-content-center align-items-center' key={element.dt}>
                            <h6 className="d-flex flex-column justify-content-center align-items-center">{Math.round(element.temp)}&deg;</h6>
                            <img src={imgUrl} alt="icon" />
                            <h3 className="d-flex condition flex-column justify-content-center align-items-center">{DateTime.fromSeconds(element.dt).toLocaleString({ hour: 'numeric', minute: 'numeric' })}
                            </h3>
                        </div>

                    )
                })}
            </div>
            <hr />
            <div className="daily d-flex flex-row mt-5 pb-5 justify-content-between">
                {daily.slice(1, 7).map((element) => {
                    const imgUrl = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
                    return (
                        <div className='d-flex flex-column justify-content-center align-items-center' key={element.dt}>
                            <h6 className="d-flex flex-column justify-content-center align-items-bottom">{element.weather[0].main}</h6>
                            <img src={imgUrl} alt="icon" />
                            <h3 className="d-flex condition flex-column justify-content-center align-items-center">{DateTime.fromSeconds(element.dt).toLocaleString({ month: 'long', day: 'numeric' })}
                            </h3>
                        </div>

                    )
                })}
            </div>
        </>

    )
}
