import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Input from './components/Input'
import TimeLocation from './components/TimeLocation'
import Weather from './components/Weather';
function App() {
  const API = process.env.REACT_APP_WEATHER_API;
  const [data, setData] = useState({});

  useEffect(() => {
    fetchData();
    //eslint-disable-next-line
  }, [])

  const fetchData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Lucknow&appid=${API}&units=metric`;
    let fetchedData = await fetch(url);
    let parsedData = await fetchedData.json();
    setData(parsedData);
    console.log(data.dt);
    console.log(data.weather[0].icon);
  }


  return (
    <>
      {data !== {} &&
        <div className="App">
          <Input />
          <TimeLocation location={data.name} time={data.dt} />
          <Weather iconCode={data.weather[0].icon} condition={data.weather[0].main} currTemp={data.main.temp} feelsLike={data.main.feels_like} humid={data.main.humidity} sunrise={data.sys.sunrise} sunset={data.sys.sunset} />
        </div>
      }
    </>
  );
}

export default App;
