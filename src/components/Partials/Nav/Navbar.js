import React, { useState, useEffect } from "react";
import { Button } from "../Button/Button";
import { Link,useLocation } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
import BrandLogo from "../../../Assets/android-chrome-192x192.png";

function Navbar() {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);

	// const isMobile = useMediaQuery({ maxWidth: 960 });

	const location = useLocation().pathname;

	console.log(location)

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);

	return (
		<>
			<nav className='navbar'>
				<div className='navbar-container'>
					

				{button &&	<Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
						<span>
							<img src={BrandLogo} alt='brandLogo' />

							<p>RC:1789193</p>
						</span>
					</Link>}

					{!button && <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
           

              <img src={BrandLogo} alt="brandLogo"/>
              <p>RC:1789193</p>
      
           
          </Link>}

				
						<div className='menu-icon' onClick={handleClick}>
							<i className={click ? "fas fa-times" : "fas fa-bars"} />
						</div>

						<ul className={click ? "nav-menu active" : "nav-menu"}>
							{location ==='/admin'? null :
								<>

								
								<li className='nav-item'>
								<Link
									to='/about'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									About Us
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/contact'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Contact Us
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/member'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Membership
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/certification'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Certification
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/nysc'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Nysc
								</Link>
							</li>
							<li className='nav-item'>
								<Link
									to='/examination'
									className='nav-links'
									onClick={closeMobileMenu}
								>
									Examination
								</Link>
							</li>

							<li>
								<Link
									to='/register'
									className='nav-links-mobile'
									onClick={closeMobileMenu}
								>
									Register
								</Link>
							</li>
							</>
							}
						</ul>
						{location === '/admin'? null :<>

						 {button && (
							<Button buttonStyle='btn--outline' to='/register'>
								Register
							</Button>
						)}
						</>
						}
			
				</div>
			</nav>
		</>
	);
}

export default Navbar;
