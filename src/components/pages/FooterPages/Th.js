import React,{useEffect} from "react";

import { Container } from "@mui/material";

import PageHero from "../../Partials/Hero/PageHero";
import HeroImage from "../../../Assets/Th.jpg";
import "../Page.css";
import "./FooterPage.css";

function Th() {
    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<PageHero img={HeroImage} title='THEMATIC' subtitle='' />

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>THEMATIC AREAS</h3>
						</div>

                        <div className="th__container">
                            <ol>
                                <li>Institutional Capacity Building </li>
                                <li>Humanitarian Services</li>
                                <li>Research and Advocacy</li>
                                <li>Education and Training</li>
                                <li>Monitoring and Evaluation</li>
                                <li>Project Management</li>
                                <li>Program Management</li>
                                <li>Procurement and Humanitarian Logistics Supply Chain Management</li>
                                <li>Human Resource Management</li>
                                <li>Disaster Risk Reduction and Waste Management</li>
                                <li>Financial Management for NGOs</li>
                                <li>Early Childhood Care Development </li>
                                <li>Occupational Health and Safety Management</li>
                                <li>Water, Sanitation and Hygiene (WASH)</li>
                            </ol>
                        </div>
					</Container>
				</section>
			</div>
		</>
	);
}

export default Th;
