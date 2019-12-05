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
import Colors from './Colors';
import type {Node} from 'react';
import {Text, KeyboardAvoidingView, Icon, TextInput, background, Button, InputField, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

import {
  ImageBackground,
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer} from 'react-native';


class LoginPage extends React.Component {
  static navigationOptions = {
    title: 'Please sign in',
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding"
      ><View style={styles.scrollViewWrapper}>

            <Text style={styles.forgotPasswordHeading}>
              Forgot your password?
            </Text>

            <Text style={styles.ForgotPasswordSubHeading}>
            Enter your email to find account.
          </Text>

          <TextInput
            customStyle={{ marginTop: 100 }}
            textColor='white'
            labelText="EMAIL ADDRESS"
            labelTextSize={14}
            labelColor='white'
            borderBottomColor='white'
            inputType="email"
          />
        </View> 

        <Button title="Submit" handelPress={this.submitEmail} disabled={false} />

    </KeyboardAvoidingView>

       
    );
  }

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
    display: "flex",
    flex: 1,
    backgroundColor: 'lightgreen'
  },
  form: {
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  ForgotPasswordHeading: {
    fontSize: 28,
    color: 'white',
    fontWeight: "300"
  },
  ForgotPasswordSubHeading: {
    color: 'white',
    fontWeight: "600",
    fontSize: 15
  },
});

export default LoginPage;

