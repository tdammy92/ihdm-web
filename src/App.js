import React, { useState } from "react";
import store from './Store/redux'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import { positions,transitions, Provider as AlertProvider } from "react-alert";
import AlertMUITemplate from "react-alert-template-mui";

import AOS from 'aos'
import 'aos/dist/aos.css';
import "./App.css";

import RootNav from "./components/Partials/Nav/RootNav";

let persistor = persistStore(store);

function App() {

	AOS.init({
		// offset: 200,
      duration: 1000,
    //   easing: 'ease-in-sine',
    //   delay: 100,
	});


console.log(process.env.NODE_ENV)

  const options = {
    position: positions.MIDDLE,
    timeout: 0,
	transition: transitions.SCALE
  };




	return (
		<>

		<Provider  store={store}>

		<PersistGate loading={null} persistor={persistor}>
			<AlertProvider template={AlertMUITemplate} {...options} >
				<RootNav/>
			</AlertProvider>
		</PersistGate>

		</Provider>
		</>
	);
}

export default App;
