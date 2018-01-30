// @flow
import React from "react";
import { StackNavigator, TabNavigator, TabBarBottom, TabBarTop } from "react-navigation";

import { Root, Icon } from "native-base";
import { Platform } from "react-native";

import Login from "./container/LoginContainer";
import Home from "./container/HomeContainer";
import More from "./container/MoreContainer";

const Presets = {
  iOSBottomTabs: {
    tabBarComponent: TabBarBottom,
    tabBarPosition: "bottom",
    swipeEnabled: false,
    animationEnabled: false,
    lazy: false,
  },
  AndroidTopTabs: {
    tabBarComponent: TabBarTop,
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    lazy: false,
  },
};

TabNavigator.Presets = {
  iOSBottomTabs: Presets.iOSBottomTabs,
  AndroidTopTabs: Presets.AndroidTopTabs,
  Default: Platform.OS === "ios"
    ? Presets.iOSBottomTabs
    : Presets.AndroidTopTabs,
};




const Tabs = TabNavigator(
	{
		Home: { screen: Home,
			navigationOptions : {
				tabBarLabel: "Home",
				// Note: By default the icon is only shown on iOS. Search the showIcon option below.
				tabBarIcon: ({ tintColor , focused }) => (
						<Icon name={focused ? "ios-home" : "ios-home-outline"} />
					)
				}
			},
			More : { screen: More,
				navigationOptions : {
					tabBarLabel: "More",
					// Note: By default the icon is only shown on iOS. Search the showIcon option below.
						tabBarIcon: ({ tintColor , focused }) => (
						<Icon name={focused ? "ios-more" : "ios-more-outline"} />
					),
				}
			}	
	},
	{
		initialRouteName: "Home",
		tabBarPosition: "bottom",
		animationEnabled: false,
		swipeEnabled: false,
		tabBarComponent: TabBarBottom,
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