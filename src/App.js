import React from 'react';
import Navbar from './components/Partials/Nav/Navbar';
import Footer from './components/Partials/Footer/Footer'
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Member from './components/pages/Member/Member';
import Register from './components/pages/Register/Register';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/member' component={Member} />
          <Route path='/register' component={Register} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
