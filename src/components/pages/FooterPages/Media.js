import React from "react";

import { Container } from "@mui/material";

import PageHero from "../../Partials/Hero/PageHero";

import HeroImage from "../../../Assets/Media1.jpg";
import WorldDay from "../../../Assets/world-humanitarian-day.jpg";
import "../Page.css";
import "./FooterPage.css";

function Media() {
	return (
		<>
			<PageHero img={HeroImage} title='MEDIA' subtitle='' />

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>MEDIA CENTRE</h3>

							<div className='media__container'>
								<div className='media__items'>
									<h4>General Events:</h4>
									<div className='media__image'>
										<i class='fas fa-globe-americas  ico'></i>

										<p>
											World Humanitarian Day Celebration (Every 19 August of the
											year)
										</p>
									</div>
								</div>

								<hr className='LongLIne' />
								<div className='media__items'>
									<h4>Upcoming Training Events:</h4>
									<div className='media__paragraph'>
										<h5>
											Starting and Managing Social Enterprise (SAMSE) Skills
											Training:{" "}
										</h5>

										<p>
											It has been confirmed that, living to impact lives and
											create positive changes in our communities brings real joy
											of fulfilment. To live for others and solve their problems
											is desiring but quite demanding. Those who have the
											passion and a heart for others can however, learn the
											skills of creating and maintaining a social organization
											to achieve their dreams. This 5 day training will provide
											the participating individuals and organizations with
											requisite and professional skills that will help them to
											deliver on purpose. They will acquire innovative skills in
											fundraising and grant proposal writings, policy advocacy,
											data gathering and analysis, basic skills in monitoring
											and evaluation tools, project management application
											skills, financial management principles, strategies in
											managing or resolving workplace conflicts and strategic
											people management and leadership skills. They will also
											walk away with a winning grant proposal template, video
											clips on monitoring and evaluation tools and discount for
											Humanitarian and Disaster Management License (HDML).
											Organization sponsoring five and above of its members will
											receive the license free.
										</p>

										<p>
											(Target Audience: Active Civil/Public servants about to
											retire, active retirees from all walks of life, young
											people with vision, visionary women, researchers,
											academia, organizations desiring to transit from profit to
											nonprofit entities, struggling CSOs, CBOs, NGOs etc.)
										</p>
									</div>
								</div>
								<div className='duration'>
									<p>
										<strong>DURATION:</strong> 5 Days
									</p>
									<p>
										<strong>DATE: </strong> 30th November-4th December, 2021
									</p>
									<p>
										<strong>TIME:</strong> Tuesday-Friday, 3pm-7pm and Saturday
										10am-4pm
									</p>
									<p>
										<strong>CITY:</strong> ABUJA
									</p>
									<p>
										<strong>VENUE: </strong> To be announced in due course
									</p>
									<p>
										<strong>COST: </strong>
                                        <br/>
                                         <span>MEMBERS = ₦20,000</span>  
                                         <br/>
                                         <span>NON-MEMBERS = ₦50,000</span>             
									</p>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</div>
		</>
	);
}

export default Media;
