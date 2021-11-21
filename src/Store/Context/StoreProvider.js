import React, { useReducer } from "react";
import { GlobalStore, InitialState } from "./Store";
import AppReducer from "./AppReducer";
import { useHistory } from "react-router";
import * as actionTypes from "./ActionTypes";
import {Redirect} from "react-router-dom"

function Provider({ children }) {
	const [state, dispatch] = useReducer(AppReducer, InitialState);


   

	function LogIn(user) {
		dispatch({ type: actionTypes.LOG_IN, payload: user });
	}

	function LogOut() {
        localStorage.clear()
		dispatch({ type: actionTypes.LOG_OUT });
		window.location.reload();
    //    return <Redirect to="/"/>
       


	}

    function CheckUser() {
        dispatch({type: actionTypes.CHECK_USER})
    }

	return (
		<GlobalStore.Provider value={{ User: state?.User, LogIn, LogOut, CheckUser }}>
			{children}
		</GlobalStore.Provider>
	);
}

export default Provider;
