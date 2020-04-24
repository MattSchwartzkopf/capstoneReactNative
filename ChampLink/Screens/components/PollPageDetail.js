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
import {Image, Text, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, TouchableHighlight} from 'react-native';
import React from 'react';
import firebase from 'firebase';

function Separator(){
  return <View style={styles.separator} />;
}
  
class EventPageDetail extends React.Component {
  
  constructor(props) {
    super(props);
    this.items = this.props.navigation.state.params.stuff; 
    this.state = {
      answer1Count: this.items[5],
      answer2Count: this.items[6],
    }
  }
//Handle local vars state change.
    getAnswer1Count = () => {
      return this.state.answer1Count;
    }

    getAnswer2Count = () => {
      return this.state.answer2Count;
    }

    //Handle answer polls.
    handleAnswer1 = () => {
      var myRef = firebase.database().ref('/Polls');
      this.state.answer1Count++;

      myRef.child(this.items[7]).update({
        answer1: this.items[3],
        answer1Count: this.state.answer1Count,
        answer2: this.items[4],
        answer2Count: this.state.answer2Count,
        date: this.items[2],
        name: this.items[1],
        question: this.items[0],
        key: this.items[7],
      });

      this.setState({answer1Count: this.state.answer1Count});
    }

    handleAnswer2 = () => {
      var myRef = firebase.database().ref('/Polls');
      this.state.answer2Count++;

      myRef.child(this.items[7]).update({
        answer1: this.items[3],
        answer1Count: this.state.answer1Count,
        answer2: this.items[4],
        answer2Count: this.state.answer2Count,
        date: this.items[2],
        name: this.items[1],
        question: this.items[0],
        key: this.items[7],
      });
      this.setState({answer2Count: this.state.answer2Count});
    }

  render() {
    return (
      <View>
        <Text></Text>
        {/* Title/Username - Can properly add names once Login is added*/}
        <Text id="question" style={styles.containerUsername}>{this.items[0]}</Text>
        <Image  style={styles.imageSize} source={require('./event.png')}/>
        <Separator/>
        <Text id='date' style={styles.containerPollInfo}> {this.items[2]} </Text>
        <Separator/>
        <Text id='creatorName' style={styles.eventDescription}> Creator: {this.items[1]} </Text>
        
        <TouchableHighlight
          id = 'answer1'
          style={styles.button}
          underlayColor="green"
          color="#F44336"
          onPress={this.handleAnswer1}
        >
          <Text style={styles.buttonText}>{this.items[3]} : {this.state.answer1Count}</Text>
        </TouchableHighlight>

        <TouchableHighlight
          id = 'answer2'
          style={styles.button}
          underlayColor="green"
          onPress={this.handleAnswer2}
        >
          <Text style={styles.buttonText}>{this.items[4]} : {this.state.answer2Count}</Text>
        </TouchableHighlight>

        <SafeAreaView>
          <ScrollView>
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() => this.props.navigation.navigate('MyChat', {items: this.items[0]})}
              underlayColor='#fff'>
              <Separator/>
              <View>
              <Text style = {styles.text}>Go to Chat</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </View>
      );
    }
  }


const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containerUsername: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: -10
  },
  eventSpacing: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
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
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'left',
    color: Colors.black,
  },
  smalltext: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'right',
    color: Colors.black,
  },
  smalltext: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'left',
    color: Colors.black,
  },
  imageSize: {
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

export default EventPageDetail;