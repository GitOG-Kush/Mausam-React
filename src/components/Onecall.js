import React from 'react'
import { DateTime } from 'luxon';
export default function Onecall(props) {
    const { hourly, daily } = props;
    return (
        <>
            <div className="horizontal-scroll d-flex">

                <div className="hourly d-flex flex-row my-5 justify-content-between" >
                    {hourly.slice(1, 15).map((element) => {
                        const imgUrl = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
                        return (
                            <div className='hourly-item d-flex flex-column justify-content-center align-items-center' key={element.dt}>
                                <h4 className="hourly-item-temp">{Math.round(element.temp)}&deg;</h4>
                                <img src={imgUrl} className="px-2" alt="icon" />
                                <h4 className="hourly-item-condition">{DateTime.fromSeconds(element.dt).toLocaleString({ hour: 'numeric', minute: 'numeric' })}
                                </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="horizontal-scroll">
                <div className="daily d-flex flex-row mt-5 pb-5 justify-content-between">
                    {daily.slice(0, 8).map((element) => {
                        const imgUrl = `http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png`
                        return (
                            <div className='daily-item d-flex flex-column justify-content-center align-items-center' key={element.dt}>
                                <h5 className="daily-item-condition">{element.weather[0].main}</h5>
                                <img src={imgUrl} alt="icon" className='px-2'/>
                                <h4 className="daily-item-date">{DateTime.fromSeconds(element.dt).toLocaleString({ month: 'long', day: 'numeric' })}
                                </h4>
                            </div>

                        )
                    })
                    }
                </div>
            </div>
        </>

    )
}
