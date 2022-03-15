import React, { Component } from 'react';
import './css/style.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './components/main_pages/MainPage';
import Footer from './components/layouts/Footer';
import Insurance from './components/insurance/Insurance';
import Tourism from './components/tourism/Tourism';
import Education from './components/education/Education';
import News from './components/news/News';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<MainPage />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/education" element={<Education />} />
          <Route path="/news/:id" element={<News />} />
          {/* <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;