import * as React from "react";
import { Image } from "react-native";
import {
  Container,
  Content,
  Header,
  Body,
  Title,
  Button,
  Text,
  View,
  Icon,
  Footer,
  Spinner
} from "native-base";

import styles from "../../../global/styles";
import i18n from "../../../global/i18n";

export interface Props {
  loginForm: any;
  onLogin: Function;
  onStartRegister: Function;
  onStartLoginFacebook: Function;
  onStartLoginGooglePlus: Function;
  onOpenUrl:Function;
  onSubmit: Function,
  isLoading: Boolean
}
export interface State {
}

class Login extends React.Component<Props, State> {

  render() {
    const isLoading = this.props.isLoading;
    return (
      <Container>
        <Header style={styles.loginHeader}>
          <Body style={styles.alignCenter}>
            <Icon name="md-aperture" style={{ fontSize: 104, color:"#40717e" }} />
            <Title style={styles.black}>Example-Redux-Thunk-ScreenTransition</Title>
          </Body>
        </Header>
        <Content>
          {this.props.loginForm}
          {
            isLoading ?
          ( <Spinner color="blue" /> )
          :
          (
            <View padder>
              <Button block  onPress= {this.props.onSubmit}>
                <Text>{i18n.t("login_signIn")}</Text>
              </Button>
            </View>
          )}
        </Content>
        <Footer style={{ backgroundColor: "#40717e" }}>
          <View style={[styles.alignCenter, { opacity: 0.5, flexDirection: "row" }]}>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default Login;
