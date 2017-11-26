import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}

class More extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Mais</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            {this.props.list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() => {
                  if (i === this.props.list.length - 1){
                    this.props.onLogout();
                  }}}>
                <Text>{item}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default More;
