import React from 'react';
import '../../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h6  data-aos='zoom-in' style={{maxWidth:'850px'}}>"The institute trains and makes readily available the human resources need of development institutions, government and non-governmental organizations, improve the skills of her members and connect them to global opportunities.." </h6>
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
