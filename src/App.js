// @flow
import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";
import { Root } from "native-base";
import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import More from "./container/MoreContainer";


const Tabs = TabNavigator(
	{
		Home: { screen: Home },
		More : { screen: More }
	},
	{
		initialRouteName: "Home",
		animationEnabled: false,
		tabBarOptions: {
		  activeTintColor: '#e91e63',
		  showLabel: false,
		}
	}
);

const App =  StackNavigator(
	{
		Login: { screen: Login },
		TabMenu: { screen: Tabs }
	},
	{
		initialRouteName: "Login",
		headerMode: "none"	
	}
);

export default () => (
		<Root>
			<App />
		</Root>
);