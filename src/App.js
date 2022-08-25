import './App.css';
import {Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetupsPage';
import FavoritesPage from './pages/Favorites';
import NewMeetup from './pages/NewMeetup';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path='/'>
          <AllMeetupsPage />
        </Route>
        <Route path='/new-meetup'>
          <NewMeetup />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
