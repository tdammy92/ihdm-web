import React,{useState} from 'react';
import Navbar from './components/Partials/Nav/Navbar';
import Footer from './components/Partials/Footer/Footer'
import './App.css';
import Home from './components/pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from './components/pages/Contact/Contact';
import About from './components/pages/About/About';
import Member from './components/pages/Member/Member';
import Register from './components/pages/Register/Register';
import Certification from './components/pages/Certification/Certification';
import Exam from './components/pages/Examination/Exam';
import Nysc from './components/pages/Nysc/Nysc';
import Career from './components/pages/FooterPages/Career';
import Media from './components/pages/FooterPages/Media';
import Projects from './components/pages/FooterPages/Projects';
import License from './components/pages/FooterPages/License';
import Th from './components/pages/FooterPages/Th';
import Hcb from './components/pages/FooterPages/Hcb';
import Login from './components/pages/Admin/Login';
import Admin from './components/pages/Admin/Admin';
import ProtectedRoute from './components/pages/ProtectedRoute';


import {getUser} from './Store/Utility'
import Portal from './components/pages/Admin/Portal';
import FormView from './components/pages/Admin/FormView';



function App() {

  const [IsAdmin, setIsAdmin] = useState(getUser)

 
 
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/member' component={Member} />
          <Route path='/certification' component={Certification} />
          <Route path='/examination' component={Exam} />
          <Route path='/nysc' component={Nysc} />
          <Route path='/register' component={Register} />
          <Route path='/career' component={Career} />
          <Route path='/media' component={Media} />
          <Route path='/project' component={Projects} />
          <Route path='/license' component={License} />
          <Route path='/th' component={Th} />
          <Route path='/hcb' component={Hcb} />
          <Route path='/login' component={Login} />
          <ProtectedRoute exact IsLoggedin={IsAdmin} Component={Admin} path='/admin'/>
          
          
          <ProtectedRoute exact IsLoggedin={IsAdmin} Component={Portal} path='/portal'/>

          <ProtectedRoute exact IsLoggedin={IsAdmin} Component={FormView} path='/portal/:id'/>
         
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
