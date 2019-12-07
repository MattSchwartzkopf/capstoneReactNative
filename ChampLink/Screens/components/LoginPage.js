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

  <body>
  <script src="/__/firebase/7.5.2/firebase-app.js"></script>
  <script src="/__/firebase/7.5.2/firebase-analytics.js"></script>
  <script src="/__/firebase/7.5.2/firebase-auth.js"></script>
  <script src="/__/firebase/7.5.2/firebase-firestore.js"></script>
  <script src="/__/firebase/init.js"></script>
</body>

var provider = new firebase.auth.GoogleAuthProvider();

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailAddress: ""
    };

  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  firebase.auth().languageCode = 'en';
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

          <Text style={styles.ForgotPasswordSubHeading}>
          Enter your email to find account.
          </Text>

          <Text>{this.getUserInfo}</Text>

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

          <Text style={styles.ForgotPasswordSubHeading}>
          Enter your password to create an account
          </Text>

          <TextInput
              style={styles.changePassword}
              customStyle={{ marginTop: 100 }}
              textDecorationColor='white'
              placeholder="PASSWORD"
              labelColor='white'
              borderBottomColor='white'
              inputType="password"
              onChangeText={password => this.handleChangePassword(password)}
            />

          <Button title="Change Password" onPress={this.submitEmail} disabled={false} />
          <Button title="Sign In" onPress={this.authenticateUser} />
          <Button title='Create an Account!' onPress={this.createUser} />

        </View> 
    </KeyboardAvoidingView>

       
    );
  }

  getUserInfo() {
    var user = firebase.auth().currentUser;

    if (user != null) {
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: " + profile.providerId);
        console.log("  Provider-specific UID: " + profile.uid);
        console.log("  Name: " + profile.displayName);
        console.log("  Email: " + profile.email);
        console.log("  Photo URL: " + profile.photoURL);


      });
    }
}

  authenticateUser() {
    Alert.alert("IN!")
    firebase.auth().signInWithPopup(provider).then(function(result) {
      Alert.alert("In Again!")
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      <style>
      <Text>test</Text>
    </style>
      retrieveOAuthToken()
      signInUser()
    }).catch(function(error) {
      Alert.alert("Nope...")
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    Alert.alert("oh")
  }

  // To redirect user
  signInUser() {
    firebase.auth().signInWithRedirect(provider);
  }

  retrieveOAuthToken() {
    firebase.auth().getRedirectResult().then(function(result) {
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // ...
      }
      // The signed-in user info.
      var user = result.user;
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  }

  handleEmailChange = email => {
    this.setState({ email: email });
  };
 
  handleChangePassword = password => {
    this.setState({ password: password });
  }

  submitEmail = () => {
    firebase.auth().sendPasswordResetEmail(this.state.email)
      .then(function() {
        Alert.alert("email sent");
      })
      .catch(function(error) {
        Alert.alert(error.message);
      });
  };

  createUser = () => {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(function() {
      Alert.alert(firebase.auth().tenantId)
    });
  }

  signOutUser() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
    }).catch(function(error) {
      // An error happened.
    });
  }

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
    paddingTop: 1000,
  },
  ForgotPasswordSubHeading: {
    color: 'white',
    textAlign: 'center',
    fontWeight: "600",
    fontSize: 15,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  changeEmail: {
    textDecorationColor: 'black',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  changePassword: {
    textDecorationColor: 'black',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingBottom: 20,
  },
  scrollViewWrapper: {
    textDecorationLine: "underline",
    paddingTop: 100,
  }
});

export default LoginPage;

