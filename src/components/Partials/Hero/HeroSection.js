import React from 'react';
import '../../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h4>"We conducts independent result-based research on vulnerable communities, carries out public education and training, advance policy advocacy, provide voluntary and advisory services to people and communities exposed to dangers." </h4>
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
