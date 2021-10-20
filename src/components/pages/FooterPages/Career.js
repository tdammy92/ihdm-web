import React,{useEffect} from "react";

import { Container } from "@mui/material";

import PageHero from "../../Partials/Hero/PageHero";
import HeroImage from "../../../Assets/career.jpg";

import "../Page.css";
import "./FooterPage.css";

function Career() {

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageHero
				img={HeroImage}
				title='CAREER'
				subtitle='lets build your desire'
			/>

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>CAREER OPPORTUNITIES</h3>

							<div className='career__container'>
								<div className='career__items'>
									<h4>(1) Internal opportunities</h4>

									<div className='career__items__list'>
										<h5>(a) Permanent Job</h5>
										<p>
											Thank you for your desire to work with us. Once the
											vacancy exists, it will be announced. Keep visiting.
										</p>
									</div>
									<div className='career__items__list'>
										<h5>(b) Volunteer Job</h5>
										<ol>
											<li>
												{" "}
												<strong className='note__tag'>
													Research Assistant:
												</strong>{" "}
												As a member you can apply for a research assistant. This
												position is open to Affiliate to Associate members only.
												More details we be communicated once we have project to
												be conducted.
											</li>

											<li>
												{" "}
												<strong className='note__tag'>
													Monitoring and Evaluation Assistant:{" "}
												</strong>{" "}
												Open to members from Associate to Full Membership level.
												More details we be communicated once we have project to
												be conducted.
											</li>

											<li>
												{" "}
												<strong className='note__tag'>
													Project Assistant:{" "}
												</strong>{" "}
												Open to members from Associate to Full Membership level.
												More details we be communicated once we have project to
												be conducted.
											</li>

											<li>
												{" "}
												<strong className='note__tag'>
													Training Instructor:{" "}
												</strong>{" "}
												This position is open to members from Associate level to
												Full Membership categories.
											</li>
										</ol>
										<p>
											The above volunteer opportunities will be made open soon
										</p>
									</div>
								</div>

								<div className='career__items'>
									<h4>(2) External Opportunities</h4>
                                    <p>Available humanitarian opportunities from our partners will be place here. Keep visiting</p>
								</div>
								<div className='career__items'>
									<h4>(3) Grant and fellowship opportunities: </h4>
                                    <p>Grant and fellowship information will be place here. Keep visiting.</p>
								</div>
							</div>
						</div>
					</Container>
				</section>
			</div>
		</>
	);
}

export default Career;
