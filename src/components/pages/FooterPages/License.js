import React,{useEffect} from "react";

import { Container } from "@mui/material";

import PageHero from "../../Partials/Hero/PageHero";
import { Button } from "../../Partials/Button/Button";

import HeroImage from "../../../Assets/License.jpg";
import "../Page.css";
import "./FooterPage.css";

function License() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageHero img={HeroImage} title='LICENSE' subtitle='' />

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>OBTAIN A HDMP LICENSE</h3>
						</div>

						<div className='license__container'>
							<div className='license__item'>
								<i class='fas fa-question'></i>
								<div className='license__question'>
                                    <p>Are you a humanitarian and Disaster Risk Management Practitioner?</p>
                                    <p>Are you interested in pursuing a consultancy career in Humanitarian and Disaster Risk Management?</p>
                                    <p>Are you running or intending to run a Humanitarian and Disaster Risk Management NGO, CSO, CBO etc organization and needed a professional touch?</p>
                                </div>

							</div>

                            <hr className="LongLIne" />
							<div className='license__news'>
							
							
                                    <p>Here is a good news for you!</p>
                            
                                <i class="far fa-newspaper"></i>

							</div>
							<div className='license__paragraphy'>
							
								<p>Earn a Humanitarian and Disaster Management Practitioner License as an Individual or organization to boost your Humanitarian career or consultancy profile.   </p>

                                <h5>BENEFITS OF OBTAINING A HDMP LICENSE</h5>
                                <ol>
                                    <li>Get admitted at the level of Associate or Full Member if you are not already a member.</li>
                                    <li>Get your company or organization admitted as corporate member at a discounted rate.</li>
                                    <li>Access to information on grant opportunities for your organization</li>
                                    <li>Learn grant proposal writing skills and get a grant winning template</li>
                                    <li>Access to E-books and relevant materials to help your organization’s research activities.</li>
                                    <li> Get networking opportunities through the institute partners and recommendation.</li>
                                   
                                </ol>

							</div>

						</div>
					</Container>
				</section>
			</div>
			<div className='register__cta'>
				<div className='inner__cta'>
					<h3>Want more information ? </h3>
					<h4>Reach us on:</h4>
					<ul>
						<li>+2347033458730</li>
						<li>+2347038286393</li>
						<li>+2348074090417</li>
						<li>ihdminfo02@gmail.com</li>
					</ul>
				</div>

				<Button
					className='btns'
					buttonStyle='btn--outline'
					buttonSize='btn--large'
					to='/register'
				>
					Register
				</Button>
			</div>
		</>
	);
}

export default License;
