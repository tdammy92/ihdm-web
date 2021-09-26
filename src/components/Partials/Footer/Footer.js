import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
// import FooterLogo from '../../../Assets/images/android-chrome-192x192.png'

function Footer() {
  return (
    <div className='footer-container'>
      
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            
            <Link to='/register'>Register</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/'>Contact Us</Link>
            <Link to='/'>Membership</Link>
            <Link to='/'>Certification</Link>
            <Link to='/'>Examination</Link>
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
            <Link to='/'>Career</Link>
            <Link to='/'>Media</Link>
            <Link to='/'>Projects</Link>
            <Link to='/'>License</Link>
         
          </div>
        </div>
      </div>

      
      <section className='social-media'>
        <div className='social-media-wrap'>
          


          <small className='website-rights'>IHDM © {new Date().getFullYear()}</small>


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
              target='_blank'
              aria-label='LinkedIn'
            >
             <i class="fas fa-user-lock"></i>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
