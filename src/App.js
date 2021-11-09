import React from 'react';
import FrontPage from './FrontPage';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DonationPage from './DonationPage';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/donate">
            <DonationPage />
          </Route>
          <Route path="/">
            <FrontPage />
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
