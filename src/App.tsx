import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LocationProvider } from './hoc';
import { LocationPage, LoadFailedPage, WeatherPage } from './pages';

import style from './App.module.scss';

function App() {
  return (
    <LocationProvider>
      <main className={style.mainContainer}>
        <Router>
          <Switch>
            <Route path="/load-error" exact component={LoadFailedPage} />
            <Route path="/set-location" exact component={LocationPage} />
            <Route path="" component={WeatherPage} exact />
          </Switch>
        </Router>
      </main>
    </LocationProvider>
  );
}

export default App;
