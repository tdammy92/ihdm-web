import React,{useEffect} from 'react';
import Container from '@mui/material/Container';
import PageHero from '../../Partials/Hero/PageHero';
import HeroImage from '../../../Assets/AboutUs.jpg';

import '../../../App.css';
import '../Page.css'
import './About.css'

export default function About() {


    useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

    return <>

    <PageHero img={HeroImage} title='ABOUT US' subtitle='Who are we ?'/>

    <div className='page__Container'>

     

        <section>

            <Container>

           
                <div>
                <h3 className='page__subtitle'>ABOUT IHDM</h3>
                    <p className='page__paragraph'>
                        <strong>The Institute of Humanitarian and Disaster Management
                        <span></span> </strong>
                         is incorporated under the laws of the Federal Republic of Nigeria as a
                        think-tank, not-for profit, nonpartisan and global professional membership body
                        to promote global best practices in community-based disaster mitigation and
                        response mechanisms, build the capacity of communities and people exposed to
                        disasters to response appropriately, disseminate relevant policy or preventive
                        information to communities prone to disasters, advance humanitarian and disaster
                        policy advocacy, provide volunteer and humanitarian services and help
                        communities maintain resilient to hazards.</p>
                    <p className='page__paragraph'>
                        As a research body, we conducts independent result-based research on vulnerable
                        communities, carries out public education and training, advance policy advocacy,
                        provide voluntary and advisory services to people and communities exposed to
                        dangers.
                    </p>
                    <p className='page__paragraph'>The institute also trains and makes readily
                        available the human resources need of development institutions, government and
                        non-governmental organizations and brings together humanitarians and development
                        professionals under a single umbrella network to enhance and improve their
                        skills, provide career and academic opportunities for her members, build
                        collaborations, share experience and develop strategies to advance the
                        development sector and humanitarian best practices globally.
                    </p>
                    <p className='page__paragraph'>IHDM is a useful resource to its members and
                        those who have a heart for the people, desire to create positive change, save
                        lives, properties and money and promote a sustainable and green development.
                    </p>
                    <p className='page__paragraph'>We believe that, disasters can be prevented and
                        destructive catastrophes reduced if the people and communities know what to do
                        in the face of hazards.
                    </p>
                    <p className='page__paragraph'>IHDM as a global membership driven professional
                        body, offers a wide range of training events to train and certify aid workers,
                        volunteers and those interested to work in the development sector, government
                        and non-governmental organizations, engage its members to participate in
                        community services that could save lives, properties and money, partner with
                        relevant institutions on disaster education and provide other humanitarian
                        services.
                    </p>

                </div>
                <div className="more__info">
                    <h3>Want more information? Reach us on:</h3>
                    <div className="more__info__details">

                        <p className='more__info__items'>+2347033458730</p>
                        <p className='more__info__items'>+2347038286393</p>
                        <p className='more__info__items'>+2348074090417</p>
                        <a className='more__info__items' href="mailto:ihdminfo02@gmail.com">ihdminfo02@gmail.com</a>
                    </div>

                </div>

                <div>
                    <h3 className='page__subtitle'>THE NEED</h3>
                    <p className='page__paragraph'>Disasters bring large humanitarian and
                        development challenges. The frequency and severity of disasters are steadily
                        increasing yearly due largely to climate change induced by human activities.
                        According to UNESCO, more than 226 million are affected by disasters every year,
                        more than 680,000 died in earthquake between 2000 and 2010 due mainly to poorly
                        constructed buildings, since 1980 drought and associated famine have claimed
                        nearly 558,000 lives and affected more than 1.6 billion people, cyclone,
                        hurricane and typhoon affected 37 million people. Covid-19 pandemic alone in the
                        space of two years, 2020-2021 has consumed 4.5 million lives and infected over
                        200 million people globally. This is just to mention but a few.
                    </p>
                    <p className='page__paragraph'>It is true that, disasters are not natural, they
                        only occur when people left preparedness or the ability to cope with hazards.
                        The knowledge of disaster risk management help in providing lifesaving
                        information and skills that protect vulnerable people during and after
                        disasters.
                    </p>
                    <p className='page__paragraph'>The impacts of both the natural and manmade
                        hazards such as earthquakes, heat waves, extreme cold, fire, volcanoes eruption,
                        storms, landslides, desertification, floods, pandemic, wars, terrorist attacks
                        etc can highly be mitigated if appropriate prevention measures are taken. The
                        need to carry out risk assessments, make and enforce sound laws, educate the
                        populace, share relevant information, create early warning systems, practice
                        good governance and sustainable development, becomes non-negotiable.
                    </p>
                    <p className='page__paragraph'>
                        <strong>The INSTITUTE OF HUMANITARIAN AND DISASTER MANAGEMENT
                       <span></span> </strong>
                         is committed to raising by training, a passionate, dedicated and disciplined
                        membership population and enhancing their capacities for disaster risk
                        management, bridging the gap between government and communities on disaster
                        policy and information dissemination and engaging relevant partners for
                        knowledge sharing and humanitarian services.
                    </p>
                </div>

            </Container>
        </section>
    </div>
    </>
}
