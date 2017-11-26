/*
 * Usually this config.js file would NEVER be commited to github repo
 * @flow
*/

export default {
    showDevScreens: __DEV__,
    useFixtures: false,
    ezLogin: false,
    yellowBox: __DEV__,
    reduxLogging: __DEV__,
    includeExamples: __DEV__,
    useReactotron: __DEV__,
    BASE_URL : "http://localhost:3000",
    ROUTE_LOGIN : "/users",
  };