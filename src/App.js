import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { LocationProvider } from 'components/Location';
import { LocationPage, WeatherPage } from 'pages';

import style from './App.module.scss';

function App() {
  return (
    <LocationProvider>
      <main className={ style.mainContainer }>
        <Router>
          <Switch>
            <Route path="/set-location" exact component={LocationPage} />
            <Route path="" component={WeatherPage} exact />
          </Switch>
        </Router> 
      </main>
    </LocationProvider>
  );
}

export default App;