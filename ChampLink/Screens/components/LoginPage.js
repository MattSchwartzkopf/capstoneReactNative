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
import { TouchableOpacity } from 'react-native-gesture-handler';

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
    title: '',
    headerTransparent: true,
    headerTintColor: 'white'
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding">

        <View style={styles.scrollViewWrapper}>

          <View style={styles.createAccountBanner}>
            <Text style={styles.createAccountText}>
              Create Account
            </Text>
          </View>
          

          <Text style={styles.enterEmailSubHeading}>
          Enter your email
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

          <Text style={styles.forgotPasswordSubHeading}>
          Username
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

          <TouchableOpacity style={styles.accountButton}  onPress={this.signInUser}>
            <Text style={styles.accountButtonText}>
              Sign In
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButton}  onPress={this.createUser}>
            <Text style={styles.accountButtonText}>
              Create Account
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButton}  onPress={this.signOutUser}>
            <Text style={styles.accountButtonText}>
              Sign Out
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountButton}  onPress={this.submitEmail}>
            <Text style={styles.accountButtonText}>
              Forgot Password
            </Text>
          </TouchableOpacity>

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

  setDisplayName = () => {
    firebase.auth().currentUser.displayName = this.state.displayName;
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
  signInUser = () =>  {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function() {
      Alert.alert("Signed In!")
    }).catch(function(error) {
      Alert.alert(error.message)
    });
  }

  signOutUser() {
    firebase.auth().signOut().then(function() {
      Alert.alert("You have signed out!")
    }).catch(function(error) {
      Alert.alert(error.message)
    });
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
    backgroundColor: 'white'
  },
  form: {
    textAlign: 'center',
    marginTop: 90,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1
  },
  enterEmailSubHeading: {
    color: 'black',
    fontWeight: "300",
    height: 40,
    fontSize: 25,
    paddingTop: 30,
    paddingBottom: 40,
    right: '-8%',
  },
  forgotPasswordSubHeading: {
    color: 'black',
    fontWeight: "300",
    height: 40,
    fontSize: 25,
    paddingTop: 20,
    paddingBottom: 40,
    right: '-8%',
  },
  changeEmail: {
    textDecorationColor: 'black',
    fontSize: 14,
    textAlign: 'center',
    textDecorationLine: 'underline',
    paddingTop: 10,
    borderColor: 'white',
    paddingBottom: 10,
    backgroundColor: '#e2f8ff',
    borderRightWidth: 30,
    borderLeftWidth: 30,
    height: 40,
  },
  changePassword: {
    textDecorationColor: 'black',
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 10,
    borderColor: 'white',
    paddingBottom: 10,
    backgroundColor: '#e2f8ff',
    borderRightWidth: 30,
    borderLeftWidth: 30,
    height: 40,
  },
  scrollViewWrapper: {
    paddingTop: 0,
  },
  createAccountBanner: {
    backgroundColor: '#00a9e1',
    paddingBottom: 40,
    shadowColor: 'silver',
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 40,
    shadowRadius: 50,
  },
  createAccountText: {
    textAlign: 'center',
    paddingTop: 70,
    color: 'white',
    fontSize: 40,
  },
  accountButton: {
    backgroundColor: "#28724f",
    paddingBottom: 15,
    paddingTop: 4,
    borderRightWidth: 30,
    borderLeftWidth: 30,
    borderColor: 'white',
    borderTopWidth: 20,
  },
  accountButtonText: {
    textAlign: 'center',
    color: 'white',
    paddingTop: 7,
    fontSize: 18,
  },
});

export default LoginPage;

