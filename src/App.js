import './App.css';
import { useEffect, useState } from 'react';
import Input from './components/Input'
import TimeLocation from './components/TimeLocation'
import Weather from './components/Weather';
import Loader from './components/Loader';
import Onecall from './components/Onecall';

function App() {
  const API = process.env.REACT_APP_WEATHER_API;
  const [dataWeather, setDataWeather] = useState(null);
  const [dataOnecall, setDataOnecall] = useState(null);
  const [city, setCity] = useState("Lucknow");
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [dataFor, setDataFor] = useState("");
  const [unitChanged, setUnitChanged] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=${unit}`;
    let fetchedDataWeather = await fetch(urlWeather);
    let parsedDataWeather = await fetchedDataWeather.json();
    setDataWeather(parsedDataWeather);
    setLoading(false);
    let { coord: { lat, lon } } = parsedDataWeather;
    console.log(city, lat,lon);

    let urlOnecall = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API}&units=${unit}`;
    let fetchedDataOnecall = await fetch(urlOnecall);
    let parsedDataOnecall = await fetchedDataOnecall.json();
    setDataOnecall(parsedDataOnecall);
    fetchedDataWeather.status !== 200 && fetchedDataOnecall.status !== 200 && setDataFor(city);
  }

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [unit])

  return (
    <>
      <Input setDataWeather={setDataWeather} fetchData={fetchData} setCity={setCity} setUnit={setUnit} setUnitChanged={setUnitChanged} />
      {loading && unitChanged === false && <Loader /> }
      {
        dataWeather && dataWeather.cod === 200 && dataOnecall?
          <div>
            <TimeLocation location={dataWeather.name} time={dataWeather.dt} />

            <Weather iconCode={dataWeather.weather[0].icon} condition={dataWeather.weather[0].main} currTemp={Math.round(dataWeather.main.temp)} feelsLike={Math.round(dataWeather.main.feels_like)} humid={dataWeather.main.humidity} sunrise={dataWeather.sys?.sunrise} sunset={dataWeather.sys?.sunset} windSpeed={dataWeather.wind.speed} unit={unit} />

            <Onecall hourly={dataOnecall.hourly} daily={dataOnecall.daily}/>

          </div> : (dataWeather && dataWeather.cod !== 200 && <p className='text-center'>No Matches for "{dataFor}"</p>)
      }
    </>
  );
}

export default App;
