import React from "react";
import "./Footer.css";
import { Link,useLocation ,useHistory} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {  addUser, removeUser } from '../../../Store/redux/userFeature'

function Footer() {
const dispatch = useDispatch()
const history = useHistory()


const {userDetails,token,isLoggedIn} = useSelector(state=>state)

	const location = useLocation().pathname



function handleLogout() {
	
	dispatch(removeUser());

	history.push('/')
}

	return (
		<div className='footer-container'>
		{location === '/admin'? null :	<div className='footer-links'>
				<div className='footer-link-wrapper'>
					<div className='footer-link-items'>
						<Link to='/about'>About Us</Link>
						<Link to='/contact'>Contact Us</Link>
						<Link to='/affiliate'>Affiliate</Link>
						<Link to='/nysc'>Nysc</Link>
						<Link to='/register'>Register</Link>
						<Link to='/member'>Membership</Link>
						<Link to='/certification'>Certification</Link>
						<Link to='/examination'>Examination</Link>
					</div>
					<div className='footer-link-items'>
						{/* <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link> */}
					</div>
				</div>
				<div className='footer-link-wrapper'>
					{/* <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Career</Link>
            <Link to='/'>Media</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>License</Link>
          </div>  */}
					<div className='footer-link-items'>
						{/* <h2>Socials</h2> */}
					
						<Link to='/career'>Career</Link>
						<Link to='/policy'>Policy</Link>
						<Link to='/money-laundry'>Money laundry</Link>
						<Link to='/t&c'>Terms and Condition</Link>
						<Link to='/media'>Media</Link>
						<Link to='/project'>Projects</Link>
						<Link to='/license'>License</Link>
						<Link to='/th'>Thematic Areas</Link>
						<Link to='/hcb'>Human Capacity Building</Link>
					</div>
				</div>
			</div>}

			<section className='social-media'>
				<div className='social-media-wrap'>
					<small className='website-rights'>
						IHDM © {new Date().getFullYear()}
					</small>

					<div className='social-icons'>
						<Link
							className='social-icon-link facebook'
							to='/'
							target='_blank'
							aria-label='Facebook'
						>
							<i className='fab fa-facebook-f' />
						</Link>
						<Link
							className='social-icon-link instagram'
							to='/'
							target='_blank'
							aria-label='Instagram'
						>
							<i className='fab fa-instagram' />
						</Link>

						<Link
							className='social-icon-link twitter'
							to='/'
							target='_blank'
							aria-label='LinkedIn'
						>
							<i className='fab fa-linkedin' />
						</Link>

						<Link
							className='social-icon-link twitter'
							to='/admin'
							aria-label='LinkedIn'
						>
							<i class='fas fa-user-lock'></i>
						</Link>
						

						{isLoggedIn &&
							(<div
								className='social-icon-link twitter'
								onClick={handleLogout}
								// to='/'
								aria-label='LinkedIn'
							>
								<i class='fas fa-sign-out-alt'></i>
							</div>)  
					
					}
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
