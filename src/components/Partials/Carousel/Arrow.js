import React from "react";

function Arrow({ prev, next }) {
	return (
		<div>
			<span className='prev' onClick={prev}>
                &#10094;
            </span>
			<span className='next' onClick={next}>
            &#10095;
            </span>
		</div>
	);
}

export default Arrow;
