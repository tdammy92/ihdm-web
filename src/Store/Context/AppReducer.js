import * as actionTypes from "./ActionTypes";

function AppReducer(state, action) {
	switch (action) {
		case actionTypes.LOG_IN:
			return localStorage.setItem("admin", JSON.stringify(action.payload));

		case actionTypes.LOG_OUT:
			return {
				...state,
				User: null,
			};

		case actionTypes.CHECK_USER:
			return {
				...state,
				User: JSON.parse(localStorage.getItem("admin")) || null,
			};

		default:
			return state;
	}
}

export default AppReducer;
