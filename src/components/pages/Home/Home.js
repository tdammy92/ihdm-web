import React, { useEffect } from "react";
import "../../../App.css";
// import Cards from "../../Partials/Cards/Cards";
import Slider from "./Slider";
import HeroSection from "../../Partials/Hero/HeroSection";
import Container from "@mui/material/Container";
import "../Page.css";
import "./Home.css";
import { Button } from "../../Partials/Button/Button";

import AOS from "aos";
import "aos/dist/aos.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { useMediaQuery } from "react-responsive";

// caoursel imports

import SliderCarousel from "../../Partials/Carousel/Slider";
// requires a loader

function Home() {
	const isMobile = useMediaQuery({ maxWidth: 960 });

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoPlay: true,
	};

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
								<div
									data-aos={isMobile ? "slide-up" : "slide-right"}
									className='mission__list'
								>
									<i className='fas fa-binoculars'></i>

									<h3>OUR VISION</h3>
									<p>
										We pictured a generation of prepared and passionate
										humanitarians to respond to development challenges.
									</p>
								</div>
								<div
									className='mission__list'
									data-aos={isMobile ? "slide-up" : "fade-up"}
								>
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
							<div
								className='core__values'
								data-aos={isMobile ? "slide-up" : "slide-right"}
							>
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
					<Slider />
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
			</div>
			<div className='page__Container'>
				<Container>
					<div className='wwd__container'>
						<h3>What we do..!</h3>
						<hr className='LongLIne' />

						<Grid container spacing={2}>
							<Grid item xs={12} md={6} className='wwd__list' spacing={2}>
								<div className='wwe__list__item' data-aos='slide-right'>
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
								<div className='wwe__list__item' data-aos='slide-up'>
									<i class='fas fa-bullhorn'></i>
									<p>
										We advance the education of the general public in all areas
										relating to disaster emergency mitigation and response.
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className='wwd__list'>
								<div className='wwe__list__item' data-aos='slide-right'>
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
								<div className='wwe__list__item' data-aos='slide-up'>
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
								<div className='wwe__list__item' data-aos='slide-right'>
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
								<div className='wwe__list__item' data-aos='slide-up'>
									<i class='fas fa-building'></i>
									<p>
										We provide training and work placement and volunteer
										opportunities in humanitarian and development sector to
										unemployed persons through our partners.
									</p>
								</div>
							</Grid>
							<Grid item xs={12} md={6} className='wwd__list'>
								<div className='wwe__list__item' data-aos='slide-right'>
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
				<Container style={{ height: "30px" }}>
					
				</Container>
			</div>
			<div className='page__Container'>
				
					<Container>
						<hr className='LongLIne' />
						<SliderCarousel />
					</Container>
		

				
			</div>
		</>
	);
}

export default Home;
