import './App.css';
import { useEffect, useState } from 'react';
import Input from './components/Input'
import TimeLocation from './components/TimeLocation'
import Weather from './components/Weather';
import Loader from './components/Loader';

function App() {
  const API = process.env.REACT_APP_WEATHER_API;
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Lucknow");
  const [unit, setUnit] = useState("metric");
  const [loading, setLoading] = useState(false);
  const [dataFor, setDataFor] = useState("");
  const [unitChanged, setUnitChanged] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=${unit}`;
    let fetchedData = await fetch(url);
    let parsedData = await fetchedData.json();
    setData(parsedData);
    setLoading(false);
    fetchedData.status !== 200 && setDataFor(city);
  }

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [unit])

  return (
    <>
      <Input setData={setData} fetchData={fetchData} setCity={setCity} setUnit={setUnit} setUnitChanged={setUnitChanged} />
      {loading && unitChanged===false && <Loader />}
      {
        data && data.cod === 200 ?
          <>
            <TimeLocation location={data.name} time={data.dt} />

            <Weather iconCode={data.weather[0].icon} condition={data.weather[0].main} currTemp={Math.round(data.main.temp)} feelsLike={Math.round(data.main.feels_like)} humid={data.main.humidity} sunrise={data.sys?.sunrise} sunset={data.sys?.sunset} windSpeed={data.wind.speed} unit={unit}/>

          </> : (data && data.cod !== 200 && <p className='text-center'>No Matches for "{dataFor}"</p>)
      }
    </>
  );
}

export default App;
