import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBj83zdrKZxOp9Xb-xdgebvr5DxuLZV-HE',
      authDomain: 'authentication-f1cc3.firebaseapp.com',
      databaseURL: 'https://authentication-f1cc3.firebaseio.com',
      projectId: 'authentication-f1cc3',
      storageBucket: 'authentication-f1cc3.appspot.com',
      messagingSenderId: '712035064838'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An app</Text>
      </View>
    );
  }
}

export default App;
