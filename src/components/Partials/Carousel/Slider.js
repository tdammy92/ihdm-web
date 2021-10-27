import React, { useState,useEffect } from "react";
import Carousel from "./Carousel";
import ImageData from "./ImageData";
import Arrow from "./Arrow";
import Dots from "./Dots";

import './Carousel.css'

const Len = ImageData.length - 1;

function SliderCarousel() {
	const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
      const inter = setInterval(()=>{
          setActiveIndex(
              activeIndex === Len ? 0 : activeIndex + 1
          )
      },5000)
        return () => {
            clearInterval(inter)
        }
    }, [activeIndex])

    
	return (
		<div className='slider__container'>
			<Carousel activeIndex={activeIndex} ImageData={ImageData} />

			<Arrow
				prev={() => setActiveIndex(activeIndex < 1 ? Len : activeIndex - 1)}


				next={() => setActiveIndex(activeIndex === Len ? 0 : activeIndex + 1)}
			/>

            <Dots  activeIndex={activeIndex} ImageData={ImageData} onclick={(activeIndex)=>setActiveIndex(activeIndex)}/>
		</div>
	);
}

export default SliderCarousel;
