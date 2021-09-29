import React from "react";

import { Container } from "@mui/material";

import PageHero from "../../Partials/Hero/PageHero";

import HeroImage from "../../../Assets/projects.jpeg";

import "../Page.css";
import "./FooterPage.css";

function Projects() {
	return (
		<>
			<PageHero img={HeroImage} title='PROJECTS' subtitle='' />

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>PROJECTS</h3>
						</div>

						<div className='project__container'>
							<div className='project__item'>
								<h4>(a) The Super 30:</h4>
								<p>
									This is an Educational Program of the institute inspired and
									motivated by an Indian Film “Super 30” to support high school
									students from poor homes or orphans to prepare them for West
									African Examination Council (WAEC) or National Examination
									Council (NECO) and the Joint Admission and Matriculation Board
									(JAMB) examinations in five science subjects such as
									Mathematics, English, Biology, Chemistry and Physics. The
									program also targets to secure full undergraduate scholarships
									for the 30 students, for higher institutions within and
									outside Nigeria. The Super 30 is an idea and the number of the
									students can be more than 30 depending on the level of
									resources at our disposal, the number of scholarship
									opportunities and partnerships. THE GOAL is to promote
									technical and science education in Nigeria, give the less
									privilege a place in our society and reduce child labour,
									abuse, crimes and insecurity in our communities. This will
									also go a long way to fulfill the following SDG goals 1, 2, 4,
									5, 10 and 16. The Super 30 project begins with a state but
									will be subsequently domesticated in all the states of the
									federation. The pilot scheme starts July 2022 and ends June,
									2023. By 2030, the program targets to support about 8,670
									Students from the disadvantaged homes.{" "}
									<strong className='note__tag'>(DONATE)</strong>{" "}
								</p>
							</div>
							<div className='project__item'>
								<h4>Research Works</h4>
								<ol>
									<li>
										{" "}
										Research work to reduce the impacts of flooding and promote
										community resilient in Hadeija Local Government of Jigawa
										State, Kebbi State, Benue State, Kogi State, Lagos State,
										Akwa-Ibom, Niger State.{" "}
									</li>

									<li>
										{" "}
										Research work to mitigate the fire hazard among the major
										markets in Kano, Katsina, Oyo State, Benue State, FCT, Abia
										State, Anambra State, and Bauchi States.
									</li>
								</ol>
							</div>
						</div>
					</Container>
				</section>
			</div>
		</>
	);
}

export default Projects;
