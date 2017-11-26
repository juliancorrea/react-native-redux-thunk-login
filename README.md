## React Native Redux-Thunk login example with screen transiton
A real example of transition screen using ReactNativeBase seed project with redux, redux-thunk and jsonserver for simulates API request

### 1. System Requirements

* Globally installed [node](https://nodejs.org/en/)

* Globally installed [react-native CLI](https://facebook.github.io/react-native/docs/getting-started.html)

* Globally installed [jsonserver](https://github.com/typicode/json-server)

### 2. Installation

On the command prompt run the following commands

```sh
$ git clone https://github.com/juliancorrea/react-native-redux-thunk-login.git

$ cd react-native-redux-thunk-login

$ npm install
````

### 3. Run 

```sh
$ npm run jsonserver
````
You will see a screen as it is:

![jsonserver runing image](https://raw.githubusercontent.com/juliancorrea/react-native-redux-thunk-login/master/assets/jsonserver-running.png)

In another terminal window:
```sh
$ react-native run-ios
```
or

```sh
$ react-native run-android
````

### 4. Screen Transition Test 

To simulate the login sucess and trasition to Secure Area do:

Fill user field with
```
julian@correa.com
```
Fill password field with
```
123qweASD
```

To simulate the login failed and Toast with error message fill the password field with a value diferrent from password above.

![Git showing screen transition](https://raw.githubusercontent.com/juliancorrea/react-native-redux-thunk-login/master/assets/redux-thunk-login.gif)

### 5. License

[MIT](https://raw.githubusercontent.com/juliancorrea/react-native-redux-thunk-login/master/LICENSE)