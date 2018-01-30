// @flow
import * as React from "react";
import { Linking} from "react-native";
import { Item, Input, Icon, Form, Container } from "native-base";
import { Field, reduxForm } from "redux-form";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import Login from "../../stories/screens/Login";
import * as Actions from "./actions";
import i18n from "../../global/i18n";
import Toast from "react-native-root-toast";


const required = value => (value ? undefined : "Required");
const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
const maxLength15 = maxLength(15);
const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
const minLength8 = minLength(8);
const email = value =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "Invalid email address" : undefined;
const alphaNumeric = value => (value && /[^a-zA-Z0-9 ]/i.test(value) ? "Only alphanumeric characters" : undefined);

export interface Props {
	navigation: any,
}
export interface State {
	isLoading : Boolean
}

class LoginForm extends React.Component<Props, State> {
	inputs: Object;
	toast: any;

	constructor(props){
		super(props);
		this.inputs = {};
		this.renderInput = this.renderInput.bind(this);
		this.state = {
			isLoading:false
		};
	}

	componentDidUpdate(){
		//logout
		if (this.props.resetNavigation){
			this.props.resetNavigation();
			this.props.resetLoginControlVars();
		}
		//login success
		else if (this.props.isLogged){
			this.loginSuccess();
		}
		//check if error exist and show Toast
		else {
			this.checkError();
		}
	}

	renderInput({ input, label, type, meta: { touched, error, warning } }) {
		const isLoading = this.props.isLoading;
		const { handleSubmit } = this.props;
		return (
			<Item error={error && touched} disabled={isLoading}>
				<Icon active name={input.name === "email" ? "person" : "unlock"} />
				<Input
					style={{color: isLoading ? "white" : "black"} }
					autoCorrect={false}
					returnKeyType={ input.name === "email" ? "next" : "go"}
					autoCapitalize="none"
					ref={ (c) => {this.inputs[input.name] = c;}}
					placeholder={input.name === "email" ? i18n.t("login_user") : i18n.t("login_password")}
					secureTextEntry={input.name === "password" ? true : false}
					underlineColorAndroid="transparent"
					onSubmitEditing={input.name === "password" ? handleSubmit(this.onSubmit) : () => {this.inputs.password._root.focus();}}
					{...input}
				/>
			</Item>
		);
	}

	onSubmit = values => {
		this.props.doLogin({userName: values.email, password: values.password});
	}

	loginSuccess(){
		this.props.navigation.navigate("TabMenu");
	}

	openUrl(urlToOpen) {
		Linking.openURL(urlToOpen);
	}

	checkError(){
		if (this.props.hasError){
			const error = this.props.lastError.message;
			let message = i18n.t("login_validationMessage");
			console.log(error);
			// Add a Toast on screen.
		Toast.show(message, {
			duration: Toast.durations.SHORT,
			position: Toast.positions.BOTTOM,
			shadow: true,
			animation: true,
			hideOnPress: true,
			onHidden: () => {
				this.props.resetLoginControlVars();
			}
		});
		}
	}
	render() {
		const { handleSubmit } = this.props;
		const form = (
			<Form>
				<Field name="email" component={this.renderInput} validate={[email, required]} />
				<Field
					name="password"
					component={this.renderInput}
					validate={[alphaNumeric, minLength8, maxLength15, required]}
				/>
			</Form>
		);
		return <Container>
			<Login navigation={this.props.navigation} loginForm={form}
				onLogin={ (userName, password) => this.login(userName,password)}
				onSubmit={handleSubmit(this.onSubmit)}
				isLoading={this.props.isLoading}
				/>
		</Container>;
	}
}

//This function simply converts our Actions into usable props.
function matchDispatchToProps(dispatch) {
	return bindActionCreators({doLogin:Actions.doLogin, resetLoginControlVars:Actions.resetLoginControlVars}, dispatch);
}
//This function, simply takes your reducer data, that is required, and converts it into a usable Prop.
const mapStateToProps = (state) => {
	return {
	data: state.loginReducer.userData,
	isLoading: state.loginReducer.isLoading,
	isLogged: state.loginReducer.isLogged,
	lastError: state.loginReducer.lastError,
	hasError : state.loginReducer.hasError,
	resetNavigation : state.loginReducer.resetNavigation
	};
};


const LoginContainer = reduxForm({
	form: "login",
})(LoginForm);

export default connect(mapStateToProps, matchDispatchToProps)(LoginContainer);
