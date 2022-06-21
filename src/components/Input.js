import React from 'react'
import { BsSearch } from "react-icons/bs"

export default function Input() {
  return (
    <div className='container my-3'>
      <ul className="nav justify-content-center">
        <li className="nav-item me-2">
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Enter City" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit"><BsSearch/></button>
          </form>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-primary me-2">&deg;C</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btn-primary">&deg;F</button>
        </li>
      </ul>
    </div>
  )
}
