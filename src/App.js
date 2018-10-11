import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import {
  Header,
  Button,
  Spinner,
  Card,
  CardSection
} from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBj83zdrKZxOp9Xb-xdgebvr5DxuLZV-HE',
      authDomain: 'authentication-f1cc3.firebaseapp.com',
      databaseURL: 'https://authentication-f1cc3.firebaseio.com',
      projectId: 'authentication-f1cc3',
      storageBucket: 'authentication-f1cc3.appspot.com',
      messagingSenderId: '712035064838'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
