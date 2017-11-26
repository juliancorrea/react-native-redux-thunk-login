export const _INITIAL_STATE_ = {
  userData: {},
	isLoading: false,
	isLogged : false,
  lastError: undefined,
  hasError: false,
  resetNavigation: undefined
};

import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESSFULLY,LOGIN_RESET_CONTROL_VARS, LOGIN_LOGOUT } from "../../global/action-names";
//it’s just a function that takes state and action as arguments, and returns the next state of the app.
//https://redux.js.org/docs/introduction/CoreConcepts.html
export default function(state: any = _INITIAL_STATE_, action: Function) {
  switch (action.type) {
    case LOGIN_SUCCESSFULLY:
      return {
        ...state,
				userData : action.userData,
				isLogged : true
      };

			case LOGIN_FAILED:
      return {
        ...state,
        lastError : action.lastError,
        hasError : action.hasError,
				isLogged : false
      };


    case LOGIN_ATTEMPT:
      return {
        ...state,
				isLoading: action.isLoading,
				isLogged : false
      };

    case LOGIN_RESET_CONTROL_VARS:
    return {
      ...state,
      hasError: false,
      resetNavigation: undefined
    };

    case LOGIN_LOGOUT:
    return {
      ...state,
      hasError: false,
      isLogged: false,
      resetNavigation: action.resetNavigation
    };

		default:
			return state;
  }
}
