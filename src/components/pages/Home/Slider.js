import React, { useState, useEffect } from "react";
import Ticker from "react-ticker";

import './Home.css'


import Org1 from "../../../Assets/org1.jpeg";
import Org2 from "../../../Assets/org2.jpeg";
import Org3 from "../../../Assets/org3.jpeg";
import Org4 from "../../../Assets/org4.jpeg";
import Org5 from "../../../Assets/org5.jpeg";
import Org6 from "../../../Assets/org6.jpeg";
import Org7 from "../../../Assets/org7.jpeg";
import Org8 from "../../../Assets/org8.jpeg";
import Org9 from "../../../Assets/org9.jpeg";
import Org10 from "../../../Assets/org10.jpeg";
import Org11 from "../../../Assets/org11.jpeg";
import Org12 from "../../../Assets/org12.jpeg";
import Org13 from "../../../Assets/org13.png";

function getRandomIndex(min, max) {
	var offset = min;
	var range = max - min + 1;
	var randomNumber = Math.floor(Math.random() * range) + offset;
	return randomNumber;
}

const rates = [
	Org1,
	Org2,
	Org3,
	Org4,
	Org5,
	Org6,
	Org7,
	Org8,
	Org9,
	Org10,
	Org11,
	Org12,
];

function MakeFakeAPICall() {
	const number = getRandomIndex(0, rates.length);
	return new Promise((resolve) => {
		window.setTimeout(() => {
			resolve(rates[number]);
		}, 300);
	});
}


const GetRatesFromAPI = () => {
	// I am using the new React Hooks API here for brevity
	const [rate, setRate] = useState("");

	useEffect(() => {
		async function fetchData() {
			const rateFromAPI = await MakeFakeAPICall();
			setRate(rateFromAPI);
		}
		fetchData();
	}, []);
	// console.log(rate)

	// A placeholder is needed, to tell react-ticker, that width and height might have changed
	// It uses MutationObserver internally
	return rate ? (
		<div className='org__carousel'>
			<img src={rate} alt='org' />
		</div>
	) : (
		<div className='org__carousel'>
			<img src={Org13} alt='org' />
		</div>
	);
};


function Slider() {
    return (
        <div style={{backgroundColor:'white'}}>
        	<Ticker offset='run-in' speed={10}>
				{() => <GetRatesFromAPI />}
			</Ticker>
            
        </div>
    )
}

export default Slider
