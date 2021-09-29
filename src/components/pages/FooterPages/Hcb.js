import React from "react";


import { Container } from "@mui/material";


import PageHero from "../../Partials/Hero/PageHero";

import HeroImage from '../../../Assets/hcb.jpg'
import '../Page.css'
import './FooterPage.css'

function Hcb() {
	return (
		<>
			<PageHero img={HeroImage} title='HUMAN CAPACITY BUILDING' subtitle='' />

			<div className='page__Container'>
				<section>
					<Container>
						<div>
							<h3 className='page__subtitle'>HUMAN CAPACITY BUILDING</h3>
						</div>

                        <div className="hcb__container">
                            <div className="hcb__items">
                                <h4>(i) Consultancy Services</h4>
                                <p>We provide in-house training services, research and other customize services to benefits the requesting organizations.</p>
                            </div>
                            <div className="hcb__items">
                                <h4>(ii) Short Training Workshops and Seminars</h4>
                               <ol>
                                   <li>Monitoring and Evaluation Training Skills (METS)</li>
                                   <li>Disaster Risk Reduction Training (DRRT).</li>
                                   <li>Program and Project Management Planning Training (PPMP)</li>
                                   <li>Strategic Leadership in Social Enterprise Management (SLSEM) </li>
                                   <li>Community Organizing for Disaster Risk Reduction</li>
                                   <li>Climate Change, Disaster Risk Mitigation and Sustainable Development</li>
                                   <li>Human Resource Management in Emergencies (HRM)</li>
                                   <li>Fundraising and Grant writing skills Training</li>
                                   
                               </ol>
                            </div>
                            <div className="hcb__items">
                                <h4>(iii) Learning Resources</h4>
                               <ul>
                                  <li>Audio/Video lessons</li>
                                  <li>Articles</li>
                                  <li>E-journal</li>
                                  <li>Research works</li>
                                  
                                   
                               </ul>
                            </div>
                        </div>
					</Container>
				</section>
			</div>
		</>
	);
}

export default Hcb;
