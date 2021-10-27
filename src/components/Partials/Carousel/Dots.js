import React from "react";

function Dots({ activeIndex, onclick, ImageData }) {
	return (
		<div className='all__dots'>
			{ImageData.map((d, i) => (
				<span
					key={i}
					className={`${activeIndex === i ? "dot dot-active" : "dot"}`}
					onClick={() => onclick(i)}
				></span>
			))}
		</div>
	);
}

export default Dots;
