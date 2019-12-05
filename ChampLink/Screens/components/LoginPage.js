/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';
import React from 'react';
import Colors from './Colors';
import * as firebase from 'firebase';
import {Text, 
        KeyboardAvoidingView,
        Alert, 
        TextInput, 
        background, 
        Button, 
        StyleSheet, 
        View, } from 'react-native';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: ""
    };
  }

  static navigationOptions = {
    title: 'Please sign in',
    headerTransparent: true,
    headerTintColor: 'white'
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding">

        <View style={styles.scrollViewWrapper}>
          <Text style={styles.forgotPasswordHeading}>
            Forgot your password?
          </Text>

          <Text style={styles.ForgotPasswordSubHeading}>
          Enter your email to find account.
          </Text>

          <TextInput
              style={styles.changeEmail}
              customStyle={{ marginTop: 100 }}
              textDecorationColor='white'
              placeholder="EMAIL ADDRESS"
              labelColor='white'
              borderBottomColor='white'
              inputType="email"
              onChangeText={email => this.handleEmailChange(email)}
            />

          <Button title="Submit" handelPress={this.submitEmail} disabled={false} />

        </View> 
    </KeyboardAvoidingView>

       
    );
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  };
 
  submitEmail = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(this.state.email)
      .then(function() {
        Alert.alert("email sent");
      })
      .catch(function(error) {
        Alert.alert(error.message);
      });
  };

  _signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };
}

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: Colors.lighter,
  },
  logo: {
    opacity: 0.7,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    alignSelf: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  wrapper: {
    textAlign: 'center',
    display: "flex",
    flex: 1,
    backgroundColor: 'lightgreen'
  },
  form: {
    textAlign: 'center',
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  ForgotPasswordHeading: {
    fontSize: 28,
    color: 'white',
    fontWeight: "300",
    paddingTop: 100,
  },
  ForgotPasswordSubHeading: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 15,
    paddingTop: 100,
  },
  changeEmail: {
    textDecorationColor: 'black',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  scrollViewWrapper: {
    textDecorationLine: "underline"
  }
});

export default LoginPage;

