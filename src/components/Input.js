import React from 'react'
import { BsSearch } from "react-icons/bs"

export default function Input(props) {
  let { setData, fetchData, setCity, setUnit, setUnitChanged } = props;

  const keyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setData(null);
      fetchData();
    }
  }

  const btnClick = () => {
    setData(null);
    fetchData();
  }

  const handleUnitChange = (e) => {
    // setData(null);
    setUnitChanged(true);
    setUnit(e);
  }

  return (
    <>
      <ul className="nav C1 mx-3 justify-content-center">
        <li className="nav-item me-2">
          <form className="d-flex">
            <input className="form-control me-2" onChange={(e) => setCity(e.target.value)} onKeyDown={keyDown} type="text" placeholder="Enter City" />
            <button className="btn btn-outline-success" onClick={btnClick} type="button"><BsSearch /></button>
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
      </ul>
      <hr />
    </>
  )
}
