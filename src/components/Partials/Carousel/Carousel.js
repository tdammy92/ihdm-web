import React from "react";

function Carousel({ activeIndex, ImageData }) {
	return (
		<section>
			{ImageData.map((data, i) => (
				<div
					key={i}
					className={activeIndex === i ? "slides active" : "inactive"}
				>
					<img src={data.url} alt={data.title} className='slider__image' />
					<p className='slide__description'>{data.description}</p>
				</div>
			))}
		</section>
	);
}

export default Carousel;
