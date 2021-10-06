import React from "react";
import "../../../App.css";
// import Cards from "../../Partials/Cards/Cards";
import Slider from './Slider'
import HeroSection from "../../Partials/Hero/HeroSection";
import Container from "@mui/material/Container";
import "../Page.css";
import "./Home.css";
import { Button } from "../../Partials/Button/Button";

import Deserted from "../../../Assets/deserted.jpg";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Image1 from "../../../Assets/image1.jpeg";
import Image2 from "../../../Assets/image2.jpeg";
import Image3 from "../../../Assets/image3.jpeg";
import Image4 from "../../../Assets/image4.jpeg";



import { useMediaQuery } from "react-responsive";

// caoursel imports

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";


// import "react-image-gallery/styles/css/image-gallery.css";
// import ImageGallery from 'react-image-gallery';





// const images = [
// 	{
// 	  original: {Image8},
// 	  description: 'Custom class for slides & thumbnails',
	
// 	},
// 	{
// 		original: {Image9},
// 		description: 'Custom class for slides & thumbnails',
// 	},
// 	{
// 		original: {Image10},
// 		description: 'Custom class for slides & thumbnails',
// 	},
//   ];

function MobilSlider() {
	return (
		<div className='Mobile__slider__content'>
			<Carousel
				infiniteLoop={true}
				autoPlay={true}
				showIndicators={false}
				showThumbs={false}
				width='100%'
			>
				<div className='Mobile__slideImage__item'>
					<img src={Image1} className='Mobile__slideImage' alt='slide' />
					<p>
						Analysing Youth Restiveness, Electoral violence and security
						challenges
					</p>
				</div>
				<div className='Mobile__slideImage__item'>
					<img src={Image2} className='Mobile__slideImage' alt='slide' />
					<p>
						Shaping the mindset and developing the atitudes tolerance in the
						next generation
					</p>
				</div>
				<div className='Mobile__slideImage__item'>
					<img src={Image3} className='Mobile__slideImage' alt='slide' />
					<p>
						Shaping the mindset and developing the atitudes tolerance in the
						next generation
					</p>
				</div>
				{/* <div className='Mobile__slideImage__item'>
                    <img src={Image3} className='Mobile__slideImage' alt='slide'/>
                    <p >Advancing Women and youth in peace building</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image4} className='Mobile__slideImage' alt='slide'/>
                    <p >Promoting and strengthening Comunity Peace</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image5} className='Mobile__slideImage' alt='slide'/>
                    <p >Training and Raising Peace Builders </p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image6} className='Mobile__slideImage' alt='slide'/>
                    <p >Promoting Ethno-Religious Dialogue and inclusion</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image7} className='Mobile__slideImage' alt='slide'/>
                    <p >Mediation, Negotiation,Dialogue and Reconcilliation</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image8} className='Mobile__slideImage' alt='slide'/>
                    <p >Intervention and Resolving Economic Resources Conflict</p>
                </div>
                <div className='Mobile__slideImage__item'>
                    <img src={Image9} className='Mobile__slideImage' alt='slide'/>
                    <p >Corporate and Workplace Conflict Prevention</p>
                </div> */}
			</Carousel>
		</div>
	);
}
function DesktopSlider() {
	return (
		<div className='slider__content'>
			<Carousel
				infiniteLoop={true}
				autoPlay={true}
				showIndicators={false}
				showThumbs={false}
				width='100%'
			>
				
				<div className='slideImage__item'>
					<img src={Image1} className='slideImage' alt='slide' />
					<p>
						Analysing Youth Restiveness, Electoral violence and security
						challenges
					</p>
				</div>
				<div className='slideImage__item'>
					<img src={Image3} className='slideImage' alt='slide' />
					<p>
						Shaping the mindset and developing the atitudes tolerance in the
						next generation
					</p>
				</div>
				<div className='slideImage__item'>
					<img src={Image4} className='slideImage' alt='slide' />
					<p>Advancing Women and youth in peace building</p>
				</div>
			</Carousel>
		</div>
	);
}












function Home() {
	const isMobile = useMediaQuery({ maxWidth: 960 });

	return (
		<>
			{" "}
			<HeroSection />
			<div className='page__Container'>
				{" "}
				<section>
					{" "}
					<Container>
						<div className='mission__statement'>
							<h2>Mission Statement</h2>

							<div className='misstion__items'>
								<div className='mission__list'>
									<i className='fas fa-binoculars'></i>

									<h3>OUR VISION</h3>
									<p>
										We pictured a generation of prepared and passionate
										humanitarians to respond to development challenges.
									</p>
								</div>
								<div className='mission__list'>
									<i class='fas fa-bullseye'></i>

									<h3>OUR MISSION</h3>
									<p>
										Developing potentials by shaping the skills and capabilities
										of current and future aid workers through quality trainings
										and inculcation of the world best humanitarian practices.
									</p>
								</div>
							</div>
							<hr className='LongLIne' />
							<div className='core__values'>
								<h3>CORE VALUES </h3>
								<ul>
									<li>
										{" "}
										<strong>VALUE:</strong> We place premium value on the
										training need of clients and offer excellent quality
										services.
									</li>
									<li>
										{" "}
										<strong>NEUTRALITY:</strong> We take and maintain a posture
										of non-alignment while providing humanitarian services.
									</li>
									<li>
										{" "}
										<strong>LEADERSHIP:</strong> We demonstrates strategic,
										leading and superior competencies and arguments that
										influences policy decisions regarding disaster management.
									</li>
									<li>
										{" "}
										<strong>SHARING:</strong> We believe knowledge and
										experience acquired through practice and research can be
										shared to expound on the discovered development issues.
									</li>
									<li>
										{" "}
										<strong>FASHION:</strong> FASHION: We picture, fashion and
										prime capable and readily available human resource needs of
										humanitarian and development organizations.
									</li>
								</ul>
							</div>
						</div>
					</Container>{" "}
					
						<Slider/>
				</section>{" "}
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

				<img src={Deserted} alt='' />
			</div>
			<div className='page__Container'>
				<Container>
					<div className='wwd__container'>
						<h3>What we do..!</h3>
						<hr className='LongLIne' />

						<Grid container spacing={2}>
							<Grid item xs={12} md={6} className='wwd__list' spacing={2}>
								<div className='wwe__list__item'>
									<i class='fas fa-american-sign-language-interpreting'></i>
									<p>
										We promote community-based disaster mitigation and response
										mechanisms, disseminate relevant policy information to
										communities prone to disasters and offer humanitarian
										services to support recovery and rehabilitation.
									</p>
								</div>
							</Grid>

							<Grid item xs={12} md={6} className='wwd__list'>
								<div className='wwe__list__item'>
									<i class='fas fa-bullhorn'></i>
									<p>
										We advance the education of the general public in all areas
										relating to disaster emergency mitigation and response.
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className='wwd__list'>
								<div className='wwe__list__item'>
									<i class='fab fa-searchengin'></i>
									<p>
										We conduct research to collate and analyze relevant data of
										people affected in any form of disasters, to help government
										and non-governmental organizations provide aid support to
										affected persons and communities.
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className='wwd__list'>
								<div className='wwe__list__item'>
									<i class='fas fa-headset'></i>
									<p>
										We provide professional counselling and advisory services to
										people suffering from human rights abuses and violations and
										other disasters to overcome the mental and emotional effects
										associated with them.
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className='wwd__list'>
								<div className='wwe__list__item'>
									<i class='fas fa-briefcase'></i>
									<p>
										We provide training support to aid workers, volunteers and
										institutions to build their capacities in providing
										humanitarian services in line with global best practices
										during emergencies. .
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className='wwd__list'>
								<div className='wwe__list__item'>
									<i class='fas fa-building'></i>
									<p>
										We provide training and work placement and volunteer
										opportunities in humanitarian and development sector to
										unemployed persons through our partners.
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className='wwd__list'>
								<div className='wwe__list__item'>
									<i class='fas fa-globe-asia'></i>
									<p>
										We partner and provide professional advice to government
										agencies and other organizations involve in disaster
										management on the best ways to address the needs of the
										people exposed to disasters.{" "}
									</p>
								</div>
							</Grid>
						</Grid>
					</div>
				</Container>
				{/* <Container>
					<div className='slider__Container'>
						{isMobile && <MobilSlider />}
						{!isMobile && <DesktopSlider />}
					</div> 

				</Container> */}
					{/* <ImageGallery items={images} /> */}
			</div>
		</>
	);
}

export default Home;
