import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import TopButtons from './component/TopButtons';
import Inputs from './component/Inputs';
import TimeAndLocation from './component/TimeAndLocation';
import TemperatureAndDetails from './component/TemperatureAndDetails';
import Forecast from './component/Forecast';
import getFormattedWeatherData from './services/weatherService';
import { useEffect, useState } from 'react';

function App() {
//   const myStyle={
//     backgroundImage: url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80")"",
//     // height:'100vh',
//     // marginTop:'-70px',
//     // fontSize:'50px',
//     // backgroundSize: 'cover',
//     // backgroundRepeat: 'no-repeat',
// };

  const [query, setQuery] = useState({q: "berlin"});
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  //https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
  //className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />

          <Forecast title="hourly forecast"/>
          <Forecast title="daily forecast" />
        </div>
      )};
    </div>
    
  );
 };

export default App;
