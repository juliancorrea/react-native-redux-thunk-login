import Config from "../../global/config";
import { LOGIN_ATTEMPT, LOGIN_FAILED, LOGIN_SUCCESSFULLY,LOGIN_RESET_CONTROL_VARS, LOGIN_LOGOUT } from "../../global/action-names";
import {_INITIAL_STATE_} from "./reducer";

const URL = `${Config.BASE_URL}${Config.ROUTE_LOGIN}`;



export function loginIsLoading(bool: boolean) {
  return {
    type: LOGIN_ATTEMPT,
    isLoading: bool,
    lastError : null
  };
}

export function loginSuccess(userData: Object) {
  return {
    type: LOGIN_SUCCESSFULLY,
    userData,
    lastError : null
  };
}

export function loginFailed(lastError: Object) {
  return {
    type: LOGIN_FAILED,
    lastError,
    hasError: lastError !== undefined
  };
}

export function resetLoginControlVars(){
  return dispatch => {
    dispatch({
      type: LOGIN_RESET_CONTROL_VARS,
      hasError: false
    });
  };
}


export function logout(resetNavigation:Function){
  return dispatch => {
    dispatch({
      type: LOGIN_LOGOUT,
      ..._INITIAL_STATE_,
      resetNavigation
    });
  };
}

export function doLogin(userValues: Object) {
  return dispatch => {
    //Dispatch loading to show Spinner on screen
    dispatch(loginIsLoading(true));

    fetch(`${URL}?userName=${userValues.userName}&password=${userValues.password}`)
      .then(response => {
	    if (response.status >= 200 && response.status <= 304){
      response.json().then(data => {
        //After sucess identified, dispatch isLoading false
        dispatch(loginIsLoading(false));
        if (data.length === 0)
          dispatch(loginFailed( new Error("No found")));
        else
          dispatch(loginSuccess(data[0]));
      });
		}
		else {
      const error = new Error(response.statusText);
			error.response = response;
			dispatch(loginIsLoading(false));
			dispatch(loginFailed(error));
			throw error;
		}
    })
      .catch(error => {
        // If any other error occurs
        dispatch(loginIsLoading(false));
        dispatch(loginFailed(error));
      });
  };
}
