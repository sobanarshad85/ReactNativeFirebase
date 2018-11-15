/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Container, Form, Input, Item, Button, Label } from 'native-base';
global.Symbol = require('core-js/es6/symbol');
require('core-js/fn/symbol/iterator');
// collection fn polyfills
require('core-js/fn/map');
require('core-js/fn/set');
require('core-js/fn/array/find');
import * as firebase from 'firebase';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});



// Initialize Firebase
var config = {
  apiKey: "find you api key from firebase.google.com",
  authDomain: "find you api key from firebase.google.com",
  databaseURL: "find you api key from firebase.google.com",
  projectId: "find you api key from firebase.google.com",
  storageBucket: "find you api key from firebase.google.com",
  messagingSenderId: "find you api key from firebase.google.com"
};

firebase.initializeApp(config);

type Props = {};

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  //Developed by Soban Arshad
  //sobanarshad85@gmail.com
  //+92 303 4645 060
  //https://www.facebook.com/sobanarshad85
  //https://www.twitter.com/sobanarshad85
  //https://www.github.com/sobanarshad85
  //https://www.linkedin.com/in/sobanarshad85

  signUp = async () => {

    try {

      await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
      alert('Signup completed' + '\n\n' + 'Congrates, You have signed up')

    }

    catch (error) {

      if (this.state.email == '' || this.state.password == '') {

        alert('Email/Password is empty' + '\n\n' + 'Please enter a valid email and password')
        return;

      }

      alert(error.code + '\n\n' + error.message)
      return;

    }
  }

  signIn = async () => {

    try {

      await firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
      alert('SignedIn' + '\n\n' + 'Congrates, you are signed in ');

    }
    catch (error) {

      if (this.state.email == '' || this.state.password == '') {

        alert('Email/Password is empty' + '\n\n' + 'Please enter a valid email and password')
        return;

      }

      alert(error.code + '\n\n' + error.message)
      return;
    }

  }

  //Developed by Soban Arshad
  //sobanarshad85@gmail.com
  //+92 303 4645 060
  //https://www.facebook.com/sobanarshad85
  //https://www.twitter.com/sobanarshad85
  //https://www.github.com/sobanarshad85
  //https://www.linkedin.com/in/sobanarshad85

  render() {
    return (
      <Container style={styles.container}>
        <Form>


          <Label style={styles.developer}>
            <Text>Developed by Soban Arshad{'\n'}</Text>
          </Label>
          <Label style={styles.developer}>
            <Text>+92 303 4645 060{'\n'}</Text>
          </Label>

          <Item floatingLabel>

            <Label>Email</Label>

            <Input
              defaultValue={this.state.email}
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(email) => this.setState({ email })}
            />

          </Item>

          <Item floatingLabel>

            <Label>Password</Label>

            <Input
              defaultValue={this.state.password}
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize='none'
              onChangeText={(password) => this.setState({ password })}
            />

          </Item>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={this.signIn}
          >

            <Text style={{ color: '#fff' }}>Login</Text>

          </Button>

          <Button style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={this.signUp}
          >

            <Text style={{ color: '#fff' }}>SignUp</Text>

          </Button>

        </Form>
      </Container >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 10
  },
  developer: {
    alignSelf: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
