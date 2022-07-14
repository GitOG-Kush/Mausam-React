import React from 'react'
import { BsSearch } from "react-icons/bs"

export default function Input(props) {
  let { setDataWeather, fetchData, setCity, setUnit, setUnitChanged } = props;

  const keyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setDataWeather(null);
      fetchData();
    }
  }

  const btnClick = () => {
    setDataWeather(null);
    fetchData();
  }

  const handleUnitChange = (e) => {
    // setData(null);
    setUnitChanged(true);
    setUnit(e);
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex nav-tab">
              <input className="form-control me-2" onChange={(e) => setCity(e.target.value)} onKeyDown={keyDown} type="text" placeholder="Enter City" />
              <button className="search-btn btn btn-outline-success" onClick={btnClick} type="button"><BsSearch /></button>
            </form>
            <ul className="navbar-nav nav-tab mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="btn-group temperature-units" role="group">
                  <input type="radio" defaultChecked className="btn-check btn-temp" name="btnradio" id="Celsius" autoComplete='off' />
                  <label className="btn btn-temp" htmlFor="Celsius" onClick={() => handleUnitChange('metric')}>&deg;C</label>

                  <input type="radio" className="btn-check btn-temp" name="btnradio" autoComplete="off" id="Fahrenheit" />
                  <label className="btn btn-temp" htmlFor="Fahrenheit" onClick={() => handleUnitChange('imperial')}>&deg;F</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <ul className="nav mx-3 justify-content-center">
        <li className="nav-item me-2">
          <form className="d-flex">
            <input className="form-control me-2" onChange={(e) => setCity(e.target.value)} onKeyDown={keyDown} type="text" placeholder="Enter City" />
            <button className="search-btn btn btn-success" onClick={btnClick} type="button"><BsSearch /></button>
          </form>
        </li>
        <li className="nav-item">
          <div className="btn-group temperature-units">
            <input type="radio" defaultChecked className="btn-check" name="btnradio" id="Celsius" autoComplete='off' />
            <label className="btn btn-outline-dark" htmlFor="Celsius" onClick={() => handleUnitChange('metric')}>&deg;C</label>

            <input type="radio" className="btn-check" name="btnradio" autoComplete="off" id="Fahrenheit" />
            <label className="btn btn-outline-dark" htmlFor="Fahrenheit" onClick={() => handleUnitChange('imperial')}>&deg;F</label>
          </div>
        </li>
      </ul> */}




    </>
  )
}
