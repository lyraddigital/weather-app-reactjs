import './App.css';

import { Header } from './components/Header/Header';
import { CurrentTemperature } from './components/CurrentTemperature/CurrentTemperature';
import { Stats } from './components/Stats/Stats';
import { Timeline } from './components/Timeline/Timeline';
import { Forecast } from './components/Forecast/Forecast';

function App() {
  return (
    <main className="main-container">
      <Header location={{ city: 'London', country: 'UK' }} date = { new Date(2021, 9, 12) } />
      <CurrentTemperature details={ { temp: 21, weather: 1 }} />
      <Stats details={ { highTemp: 23, lowTemp: 14, windSpeed: 7, rainPercentage: 0, sunriseTime: new Date(2021, 9, 12, 5, 44, 26), sunsetTime: new Date(2021, 9, 12, 20, 44, 26) } }  />
      <Timeline />
      <Forecast />
    </main>
  );
}

export default App;
