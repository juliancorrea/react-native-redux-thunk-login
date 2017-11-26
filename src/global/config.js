/*
 * Usually this config.js file would NEVER be commited to github repo
 * @flow
*/
import {Platform} from "react-native";

export default {
    showDevScreens: __DEV__,
    useFixtures: false,
    ezLogin: false,
    yellowBox: __DEV__,
    reduxLogging: __DEV__,
    includeExamples: __DEV__,
    useReactotron: __DEV__,
    BASE_URL : Platform.select({
      ios: "http://localhost:3000",
      android: "http://192.168.0.102:3000"
    }) ,
    ROUTE_LOGIN : "/users",
  };