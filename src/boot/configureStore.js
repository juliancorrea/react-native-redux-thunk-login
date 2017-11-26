// @flow
import { AsyncStorage } from "react-native";
import { composeWithDevTools } from "remote-redux-devtools";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";
import reducer from "../reducers";
import { createLogger } from "redux-logger";

let middlewares = [thunk];

if (__DEV__) {
  middlewares.push(createLogger({}));
}

const compose = composeWithDevTools({ realtime: true, fport: 8000 });

export default function configureStore(onCompletion: () => void): any {
  const enhancer = compose(applyMiddleware(...middlewares));

  const store = createStore(reducer, enhancer);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
