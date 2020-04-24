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
import {Image, Text, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, Linking, Button} from 'react-native';
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
      yes: this.items[4],
      maybe: this.items[5],
      no: this.items[6],
    }}


    updateYesRSVP = () => {
      var myRef = firebase.database().ref('/Events');
      this.state.yes++;

      console.log("YESSSSSSSS: " + this.items[4]);

      myRef.child(this.items[7]).update({
        name: this.items[0], // good
        desc: this.items[2], // good
        date: this.items[1], // good
        url: this.items[3], // good
        key: this.items[7],
        yes: this.state.yes,
        maybe: this.state.maybe,
        no: this.state.no,
      });
      this.setState({yes: this.state.yes});
    }

    updateMaybeRSVP = () => {
      var myRef = firebase.database().ref('/Events');
      this.state.maybe++;

      console.log("MAYBEEEEEEEE: " + this.items[6]);

      myRef.child(this.items[7]).update({
        name: this.items[0], // good
        desc: this.items[2], // good
        date: this.items[1], // good
        url: this.items[3], // good
        key: this.items[7],
        yes: this.state.yes,
        maybe: this.state.maybe,
        no: this.state.no,
      });
    }

    updateNoRSVP = () => {
      var myRef = firebase.database().ref('/Events');
      this.state.no++;

      console.log("NOOOOOOOOO: " + this.items[4]);

      myRef.child(this.items[7]).update({
        name: this.items[0], // good
        desc: this.items[2], // good
        date: this.items[1], // good
        url: this.items[3], // good
        key: this.items[7],
        yes: this.state.yes,
        maybe: this.state.maybe,
        no: this.state.no,
      });
    }


  render() {
    return (
      <View>
        <Text></Text>
        {/* Title/Username - Can properly add names once Login is added*/}
        <Text style={styles.containerUsername}>{this.items[0]}</Text>
        <Image  style={styles.imageSize} source={require('./event.png')}/>
        <Separator/>
        <Text id='description' style={styles.containerPollInfo}> {this.items[2]} </Text>
        <Separator/>
        <Text id='date' style={styles.eventDescription}> {this.items[1]} </Text>
        <Separator/>    
        <Text id='url' style={styles.text} onPress={() => {Linking.openURL(this.items[3]);}}>Learn More!</Text>

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
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() => this.props.navigation.navigate("AddPollEvent")}
              underlayColor='#fff'>
              <Separator/>
              <View>
              <Text style = {styles.text}>Create Poll for this Event</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() => this.props.navigation.navigate('DisplayPollsForAnEvent', {items: this.items[0]})}
              underlayColor='#fff'>
              <Separator/>
              <View> 
                <Text style = {styles.text}>Display Polls for This event</Text>
              </View>
            </TouchableOpacity>

            <Separator/>
              <View> 
                <Text style={styles.text}>Attending?</Text>
                <Button title="Yes" onPress={this.updateYesRSVP}></Button>
                <Button title="Maybe" onPress={this.updateMaybeRSVP}></Button>
                <Button title="No" onPress={this.updateNoRSVP}></Button>
              </View>

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
});

export default EventPageDetail;