import React from 'react'
import Input from './Input'

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Input setDataWeather={props.setDataWeather} fetchData={props.fetchData} setCity={props.setCity} setUnit={props.setUnit} setUnitChanged={props.setUnitChanged} />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
