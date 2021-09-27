import React from "react";
import PageHero from "../../Partials/Hero/PageHero";

import HeroImage from '../../../Assets/exam2.jpg'

import { Container } from "@mui/material";

import "./Exam.css";
import "../Page.css";

function Exam() {
	return (
		<>
			<PageHero img={HeroImage} title='Examination' subtitle='Take an Exam today..!!!' />

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>SEE ANNUAL TRAINING AND EXAMINATION SCHEDULES BELOW:</h3>
                            <div className="exam__container">
                                <div className="exam__item">
                                    <h4>1<sup>st</sup>  DIET STARTS JANUARY AND ENDS MARCH</h4>
                                    <ul>
                                        <li>Registration begins Last week of December every year.</li>
                                        <li>Training Commences 2nd week of January and Ends 3rd of March each year.</li>
                                        <li>Professional Examination Holds Saturday of 3rd week of March Every year</li>
                                        <li>Induction of Candidates holds last Saturday of April each year.</li>
                                    </ul>
                                </div>
                                <div className="exam__item">
                                    <h4>2<sup>nd</sup>  DIET STARTS APRIL AND ENDS JUNE</h4>
                                    <ul>
                                        <li>Registration begins Last week of March every year.</li>
                                        <li>Training Commences 1st week of April and Ends 3rd of June every year.</li>
                                        <li>Professional Examination Holds Saturday of 3rd week of June every year.</li>
                                        <li>Induction of Candidates holds last Saturday of July every year.</li>
                                    </ul>
                                </div>
                                <div className="exam__item">
                                    <h4>3<sup>rd</sup>  DIET STARTS JULY AND ENDS SEPTEMBER</h4>
                                    <ul>
                                        <li>Registration begins Last week of June every year.</li>
                                        <li>Training Commences 1st week of July and Ends 3rd of September every year.</li>
                                        <li>Professional Examination Holds Saturday of 3rd week of September every year.</li>
                                        <li>Induction of Candidates holds last Saturday of October every year.</li>
                                    </ul>
                                </div>
                                <div className="exam__item">
                                    <h4>4<sup>th</sup> DIET STARTS OCTOBER AND ENDS DECEMBER</h4>
                                    <ul>
                                        <li>Registration begins Last week of September every year.</li>
                                        <li>Training Commences 1st week of October and Ends 2nd of December every year.</li>
                                        <li>Professional Examination Holds Saturday of 2nd week of December every year.</li>
                                        <li>Induction of Candidates holds last Saturday of January every year.</li>
                                    </ul>
                                </div>
                                <h4>REGISTER FOR YOUR PROFESSIONAL EXAMINATION NOW AND BE CERTIFIED!</h4>
                            </div>
						</div>
					</Container>
				</section>
			</div>
		</>
	);
}

export default Exam;
