// @flow
import * as React from "react";
import { Text, View, StyleSheet} from "react-native";

class HomeContainer extends React.Component {

		render() {
			return <View style={styles.container}>
			<Text style={{ textAlign: "center", color:"white", fontSize:30}}>HOME</Text>
			</View>;
		}
}


const styles = StyleSheet.create({
	container: {
    flex: 1,
    justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(39, 174, 96,1.0)"
  }
  });


export default HomeContainer;
