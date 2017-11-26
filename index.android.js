import Config from "./src/global/config";
import Reactotron from "reactotron-react-native";
// import { reactotronRedux as reduxPlugin } from 'reactotron-redux'
// import sagaPlugin from 'reactotron-redux-saga'

if (__DEV__) {
    require("react-devtools");
  }

  if (Config.useReactotron) {
    // https://github.com/infinitered/reactotron for more options!
    Reactotron
      .configure({ name: "Example-Redux-Thunk-ScreenTransition App" })
      .useReactNative()
      // .use(reduxPlugin({ onRestore: Immutable }))
      // .use(sagaPlugin())
      .connect();
  
    // Let's clear Reactotron on every time we load the app
    Reactotron.clear();
  
    // Totally hacky, but this allows you to not both importing reactotron-react-native
    // on every file.  This is just DEV mode, so no big deal.
    console.tron = Reactotron;
  }



import { AppRegistry } from "react-native";
import App from "./App";

// allow reactotron overlay for fast design in dev mode
const app = Config.useReactotron ? console.tron.overlay(App) : App;

AppRegistry.registerComponent("ReactNativeSeed", () => app);
