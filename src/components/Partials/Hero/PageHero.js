import React from 'react'
import './PageHero.css'
import { motion } from "framer-motion"


const ArrowAnimation = {
    y:{
        duration:0.5,
        yoyo:Infinity,
        ease:"easeIn"
    }
}


function PageHero({img,title,subtitle}) {
    return (
        <div className='hero-container'>
            <img src={img} alt='pageHero'/>
            <h1>{title}
            </h1>
            <p>{subtitle}</p>
            <div className='down__arrow'>
             <p>Scroll Down</p>

          
             <motion.i 
             animate={{y:20,opacity:0.6}}
             transition={ArrowAnimation}
             class="fas fa-arrow-down"></motion.i>

            </div> 

        </div>
    )
}

export default PageHero


// { type: "spring", stiffness: 100, repeat:'infinity',duration:2 }