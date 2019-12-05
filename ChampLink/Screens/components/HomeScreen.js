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
import {Image, Text, Button, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import * as firebase from 'firebase';
import firestore from '@firebase/firestore';

var accountNames = ["Tien Nguyen", "Matthew Schwartzkopf"]


// ATTEMPTING TO LOAD
// ALL DATA FROM
// FIREBASE DATABASE
// HERE vvvvvvvvvvv
function Todos() {
  const [ todo, setTodo ] = useState('');
  const ref = firestore().collection('todos');
  
  async function addTodo() {
    await ref.add({
      title: todo,
      complete: false,
    });
    setTodo('');
  }
}

export default class HomeScreen extends React.Component {


  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Image  style={{
          width: 400,
          height: 200,
          }}
          source={require('./champlainHomePage.png')}/>

        {/* Title/Username - Can properly add names once Login is added*/}
        <Text id='username' style={styles.containerUsername}>
          Name: {accountNames[0]}
        </Text>

        {/* ID Number */}
        <Text id='idNumber' style={styles.containerIdNumber}>
          ID: ####1233 - 13
        </Text>

        {/* This is the button to navigate to the Login Screen */}
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => this.props.navigation.navigate('LoginPage')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Login Page</Text>
        </TouchableOpacity>

        {/* This is the button to navigate to the Events Screen */}
        <TouchableOpacity
          style={styles.eventScreenButton}
          onPress={() => this.props.navigation.navigate('EventPage')}
          underlayColor='#fff'>
          <Text style={styles.eventText}>Event Page</Text>
        </TouchableOpacity>

        {/* This is the button to navigate to the Poll Screen */}
        <TouchableOpacity
          style={styles.pollPageButton}
          onPress={() => this.props.navigation.navigate('PollPage')}
          underlayColor='#fff'>
          <Text style={styles.pollPageText}>Poll Page</Text>
        </TouchableOpacity>

        {/* This is the button to navigate to the Chat Screen */}
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => this.props.navigation.navigate('MyChat')}
          underlayColor='#fff'>
          <Text style={styles.loginText}>Chat!</Text>
        </TouchableOpacity>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  eventScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  eventText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  pollPageButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  pollPageText:{
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
},
  loginScreenButton:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  loginText:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  containerUsername: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: -10
  },
  containerIdNumber: {
    textAlign: 'right',
    fontSize: 18,
    paddingBottom: 40,
    paddingTop: 0,
    fontWeight: 'bold',
    marginTop: 10,
    marginVertical: -40,
    marginRight: 0,
  },
  containerPollInfo: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
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
    color: Colors.black,
  },
});
