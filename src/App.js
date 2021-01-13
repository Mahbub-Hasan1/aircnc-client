import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import MapSearchHostels from './components/MapSearchHostels/MapSearchHostels';
import { createContext, useState } from 'react';
import HomeDetailPage from './components/HomeDetailPage/HomeDetailPage';
import PageNotFound from './components/ShareComponent/PageNotFound/PageNotFound';

export const SearchContext = createContext();

function App() {

  const [searchLocation, setSearchLocation] = useState("");
  const [homesLocation, setHomesLocation] = useState("")

  return (
    <SearchContext.Provider value={{ searchLocation, setSearchLocation, homesLocation, setHomesLocation }}>
      <div>
        <Router>
          <Switch>
            <Route path="/homes">
              <MapSearchHostels />
            </Route>
            <Route path="/hostel-detail_id=/:id">
              <HomeDetailPage />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </Router>
      </div>
    </SearchContext.Provider>
  );
}

export default App;
