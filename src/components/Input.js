import React from 'react'
import { BsSearch } from "react-icons/bs"

export default function Input(props) {
  let { setData, fetchData, setCity, setUnit } = props;

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

  return (
    <div className='container my-3'>
      <ul className="nav justify-content-center">
        <li className="nav-item me-2">
          <form className="d-flex">
            <input className="form-control me-2" onChange={(e) => setCity(e.target.value)} onKeyDown={keyDown} type="text" placeholder="Enter City" />
            <button className="btn btn-outline-success" onClick={btnClick} type="button"><BsSearch /></button>
          </form>
        </li>
        <li className="nav-item">
          <button type="button" onClick={() => setUnit('metric')} className="btn btn-primary me-2">&deg;C</button>
        </li>
        <li className="nav-item">
          <button type="button" onClick={() => setUnit('imperial')} className="btn btn-primary">&deg;F</button>
        </li>
      </ul>
    </div>
  )
}
