import { Header } from './components/Header/Header';
import { CurrentWeather } from './components/CurrentWeather/CurrentWeather';
import { Timeline } from './components/Timeline/Timeline';
import { Forecast } from './components/Forecast/Forecast';

import style from './App.module.scss';

function App() {
  return (
    <main className={ style.mainContainer }>
      <Header location={{ city: 'London', country: 'UK' }} date = { new Date(2021, 9, 12) } />
      <CurrentWeather location='London' />      
      <Timeline />
      <Forecast />
    </main>
  );
}

export default App;
