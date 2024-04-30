import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";
import "../../../App.css";
import Home from "../../pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "../../pages/Contact/Contact";
import About from "../../pages/About/About";
import Member from "../../pages/Member/Member";
import Register from "../../pages/Register/Register";
import Certification from "../../pages/Certification/Certification";
import Exam from "../../pages/Examination/Exam";
import Nysc from "../../pages/Nysc/Nysc";
import Career from "../../pages/FooterPages/Career";
import Media from "../../pages/FooterPages/Media";
import Projects from "../../pages/FooterPages/Projects";
import Policy from "../../pages/FooterPages/Policy";
import MoneyLaundry from "../../pages/FooterPages/MoneyLaundry";
import TermsC from "../../pages/FooterPages/TermsC";
import License from "../../pages/FooterPages/License";
import Th from "../../pages/FooterPages/Th";
import Hcb from "../../pages/FooterPages/Hcb";
import Login from "../../pages/Admin/Login";
import Admin from "../../pages/Admin/Admin";
import ProtectedRoute from "../../pages/ProtectedRoute";

import Portal from "../../pages/Admin/Portal";
import FormView from "../../pages/Admin/FormView";
import Affiliate from "../../pages/FooterPages/Affiliate";
import SerialNumber from '../../pages/Admin/SerialNumber';


function RootNav() {

    // const IsLoggedin =false


    const IsLoggedin = useSelector(state=>state?.isLoggedIn)




  return (
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
						<Route path='/affiliate' component={Affiliate} />
						<Route path='/policy' component={Policy} />
						<Route path='/money-laundry' component={MoneyLaundry} />
						<Route path='/t&c' component={TermsC} />
						<Route path='/media' component={Media} />
						<Route path='/project' component={Projects} />
						<Route path='/license' component={License} />
						<Route path='/th' component={Th} />
						<Route path='/hcb' component={Hcb} />
						<Route path='/login' component={Login} />
						<ProtectedRoute
							exact
							IsLoggedin={IsLoggedin}
							Component={Admin}
							path='/admin'
						/>

						<ProtectedRoute
							exact
							IsLoggedin={IsLoggedin}
							Component={Portal}
							path='/portal'
						/>
						<ProtectedRoute
							exact
							IsLoggedin={IsLoggedin}
							Component={SerialNumber}
							path='/serial'
						/>

						<ProtectedRoute
							exact
							IsLoggedin={IsLoggedin}
							Component={FormView}
							path='/portal/:id'
						/>
					</Switch>
					<Footer />
				</Router>
  )
}

export default RootNav