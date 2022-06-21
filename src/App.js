import logo from './logo.svg';
import './App.css';
import { useEffect, useState, useCallback } from 'react';
import Input from './components/Input'
import TimeLocation from './components/TimeLocation'
import Weather from './components/Weather';
function App() {
  const API = process.env.REACT_APP_WEATHER_API;
  const [data, setData] = useState({});
  const [counter, setCounter] = useState(0)

  const fetchData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=${API}&units=metric`;
    let fetchedData = await fetch(url);
    let parsedData = await fetchedData.json();
    // console.log(parsedData);
    // console.log('data fetched');
    setCounter(counter + 1);
    console.log(counter);
    setData(parsedData);

    console.log(data);
    // console.log(data?.weather[0]?.icon);
  }
  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [data])

  return (
    <>
      <h1>heello</h1>
      <div className="App">
        <Input />
        <TimeLocation location={data?.name} time={data?.dt} />
        <Weather iconCode={data?.weather[0]?.icon} condition={data?.weather[0]?.main} currTemp={data?.main?.temp} feelsLike={data?.main?.feels_like} humid={data?.main?.humidity} sunrise={data?.sys?.sunrise} sunset={data?.sys?.sunset} />
      </div>
    </>
  );
}

export default App;
