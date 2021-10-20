import React from 'react';
import '../../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h6  data-aos='zoom-in'>"The institute trains and makes readily available the human resources need of development institutions, government and non-governmental organizations and brings together humanitarians and development professionals under a single umbrella network to enhance and improve their skills, provide career and academic opportunities for her members, build collaborations, share experience and develop strategies to advance the development sector and humanitarian best practices globally." </h6>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          to='/register'
        >
          Register
        </Button>
       
      </div>
    </div>
  );
}

export default HeroSection;
