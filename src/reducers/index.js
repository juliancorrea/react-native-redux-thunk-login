import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import moreReducer from "../container/MoreContainer/reducer";
import loginReducer from "../container/LoginContainer/reducer";

export default combineReducers({
	form: formReducer,
	moreReducer,
	loginReducer
});
