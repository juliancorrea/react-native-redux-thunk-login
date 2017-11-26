// @flow
import * as React from "react";
import { Text,View,Image , StyleSheet} from "react-native";
import { connect } from "react-redux";
// import Home from "../../stories/screens/Home";

import { Icon } from 'native-base';

export interface Props {

}
export interface State {}
class HomeContainer extends React.Component<Props, State> {
	
	static navigationOptions = {
		tabBarLabel: 'Home',
		// Note: By default the icon is only shown on iOS. Search the showIcon option below.
		tabBarIcon: ({ tintColor , focused }) => (
				<Icon name={focused ? "ios-home" : "ios-home-outline"} />
			)
	  };

		render() {
			return <View style={styles.container}>
			<Text style={{ textAlign: 'center', color:'white', fontSize:30}}>HOME</Text>
			</View>;
		}
}


const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(39, 174, 96,1.0)'
  }
  });


export default HomeContainer;
