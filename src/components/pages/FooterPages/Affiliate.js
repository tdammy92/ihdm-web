import React, { useEffect } from "react";

import { Container } from "@mui/material";

import PageHero from "../../Partials/Hero/PageHero";

import HeroImage from "../../../Assets/affiliate.jpg";
import "../Page.css";
import "./FooterPage.css";


import AffiliateImage1 from '../../../Assets/org21.png'
import AffiliateImage2 from '../../../Assets/org32.jpeg'

function Affiliate() {
	useEffect(() => {
		window.scroll(0, 0);
	},[]);
	return (
		<>
			<PageHero img={HeroImage} title='AFFILIATION' subtitle='We are affilited to..' />
			<div className='page__Container'>
				<Container>
					<div>
						<h3 className='page__subtitle'>Affiliation</h3>

						<div className='affiliate__container'>
							<div className='affiliate__item'>
								<img src={AffiliateImage1} alt='AffiliateImage1' />
								<h4>Abra State institute of science and Technology, Abra Province Philipine</h4>
							</div>

<hr className="LongLIne" />

							<div className='affiliate__item'>
								<img src={AffiliateImage2} alt='AffiliateImage2' />
								<h4>US-Interglobal University Jubbaland State, Somalia</h4>
							</div>
						</div>
					</div>
				</Container>
			</div>
		</>
	);
}

export default Affiliate;
