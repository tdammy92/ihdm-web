import React,{useEffect} from "react";
import {Link} from 'react-router-dom'
import PageHero from "../../Partials/Hero/PageHero";
import { Button } from "../../Partials/Button/Button";

import HeroImage from "../../../Assets/NYSC-pix.jpg";

import { Container } from "@mui/material";

import "../Page.css";
import "./Nysc.css";
import "../Examination/Exam.css";

function Nysc() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageHero img={HeroImage} title='NYSC' subtitle='Nysc Scheme' />

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<div className='heading__paragraphy'>
								<p>
									The NYSC Scheme program is aim to provide serving Corps
									Members with the in-demand professional skills needed in a
									workplace today. This training will prepare them for work
									after their service year. This is necessary because many fresh
									graduates today lack the necessary skills employers request
									from applicants most especially in humanitarian and
									development sector.
								</p>

								<p>
									This 3 Months professional training will be organized 4 times
									a year. At the end of the training, corps members will be
									mandate to volunteer with the institute or our partners to
									execute some of its projects. This will help them to apply the
									knowledge learned and acquire field experience as well.
								</p>
							</div>
							<h3 className='page__subtitle'>
								SEE ANNUAL TRAINING AND EXAMINATION SCHEDULES BELOW:
							</h3>
							<div className='exam__container'>
								<div className='exam__item'>
									<h4>
										1<sup>st</sup> DIET STARTS JANUARY AND ENDS MARCH
									</h4>
									<ul>
										<li>
											Registration begins Last week of December every year.
										</li>
										<li>
											Training Commences 2nd week of January and Ends 3rd of
											March each year.
										</li>
										<li>
											Professional Examination Holds Saturday of 3rd week of
											March Every year
										</li>
										<li>
											Induction of Candidates holds last Saturday of April each
											year.
										</li>
									</ul>
								</div>
								<div className='exam__item'>
									<h4>
										2<sup>nd</sup> DIET STARTS APRIL AND ENDS JUNE
									</h4>
									<ul>
										<li>Registration begins Last week of March every year.</li>
										<li>
											Training Commences 1st week of April and Ends 3rd of June
											every year.
										</li>
										<li>
											Professional Examination Holds Saturday of 3rd week of
											June every year.
										</li>
										<li>
											Induction of Candidates holds last Saturday of July every
											year.
										</li>
									</ul>
								</div>
								<div className='exam__item'>
									<h4>
										3<sup>rd</sup> DIET STARTS JULY AND ENDS SEPTEMBER
									</h4>
									<ul>
										<li>Registration begins Last week of June every year.</li>
										<li>
											Training Commences 1st week of July and Ends 3rd of
											September every year.
										</li>
										<li>
											Professional Examination Holds Saturday of 3rd week of
											September every year.
										</li>
										<li>
											Induction of Candidates holds last Saturday of October
											every year.
										</li>
									</ul>
								</div>
								<div className='exam__item'>
									<h4>
										4<sup>th</sup> DIET STARTS OCTOBER AND ENDS DECEMBER
									</h4>
									<ul>
										<li>
											Registration begins Last week of September every year.
										</li>
										<li>
											Training Commences 1st week of October and Ends 2nd of
											December every year.
										</li>
										<li>
											Professional Examination Holds Saturday of 2nd week of
											December every year.
										</li>
										<li>
											Induction of Candidates holds last Saturday of January
											every year.
										</li>
									</ul>
								</div>
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

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>HOW TO REGISTER OFFLINE?:</h3>
						</div>

						<div className='offline__reg__container'>
							<p>
								<strong className='note__tag'>Step 1:</strong> Obtain a FORM
								from our State Coordinator in your state of service during
								orientation camp, during CDS meetings, visit the office or call
								the contact of the coordinator for this purpose.{" "}
							</p>

							<p>
								<strong className='note__tag'>Step 2:</strong> Pay your
								registration and training fee directly to our Coordinator in
								your state of service{" "}
							</p>

							<p>
								<strong className='note__tag'>Step 3:</strong> Attend Training
								and sit for your professional examination
							</p>

							<p>
								<strong className='note__tag'>Step 4:</strong> Pay your
								induction/certification fee directly to the INSTITUTE ACCOUNT
								detail below after obtaining pass mark:{" "}
							</p>

							<div className='bank__details' id='bankDetails'>
								<h3>IHDM Accountant Details</h3>

								<p>
									Account Name:
									<strong>
										Institute of Humanitarian and Disaster Management
									</strong>
								</p>
								<p>
									Account Number:
									<strong>1760111727</strong>
								</p>
								<p>
									Bank:
									<strong>Ecobank Nig. Plc</strong>
								</p>
							</div>

							<p>
								<strong className='note__tag'>Step 5:</strong>Get inducted as an
								Associate Member of the Institute during induction ceremony.
							</p>
						</div>
<hr className="LongLIne" />
                        <div className="nysc__item">
                            <div className="nysc__cost">
                                <h4>NYSC COST FEE: </h4>
                                <ol>
                                    <li>Application Form: ₦1,000</li>
                                    <li>Training & Examination Fee: ₦9,000</li>
                                    <li>Induction and Certification Fee: ₦13,000</li>
                                </ol>
                            </div>
                            <div className="nysc__cost">
                                <h4>CERTIFICATE AWARDS: </h4>
                                <ol>
                                    <li>Associate Membership Certificate</li>
                                    <li>Professional Certificate</li>
                                    <li>Postgraduate Diploma Certificates</li>
                                </ol>

                                <p>Check under  <Link to='contact'> contact Us</Link> to see details</p>
                            </div>
                        </div>
					</Container>
				</section>
			</div>
		</>
	);
}

export default Nysc;
