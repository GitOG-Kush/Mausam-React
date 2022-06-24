import React from 'react'
import loading from "./Loading.gif"

export default function Loader() {
  return (
    <div className="container text-center">
      <img src={loading} alt="loading" />
    </div>
  )
}
