// @flow
import * as React from "react";
// import { StyleSheet} from "react-native";
import { connect } from "react-redux";
import More from "../../stories/screens/More";
import datas from "./data";
import { fetchList } from "./actions";
import {logout} from "../LoginContainer/actions";
import {bindActionCreators} from "redux";

import { NavigationActions } from "react-navigation";

const resetAction = NavigationActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: "Login" })],
  });


export interface Props {
	navigation: any,
	fetchList: Function,
	data: Object,
}
export interface State {}


class MoreContainer extends React.Component<Props, State> {

	componentDidMount() {
		console.log(datas);
		this.props.fetchList(datas);
	}

	handleLogout(){
		this.props.doLogout(() => this.props.navigation.dispatch(resetAction));
	}

	render() {
		return <More navigation={ this.props.navigation }
		list={ this.props.data }
		onLogout={() => { this.handleLogout();}}
		/>;
	}
}

function matchDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchList: fetchList,
		doLogout: logout
	}, dispatch);
}

const mapStateToProps = state => ({
	data: state.moreReducer.list,
	isLoading: state.moreReducer.isLoading
});

export default connect(mapStateToProps, matchDispatchToProps)(MoreContainer);
