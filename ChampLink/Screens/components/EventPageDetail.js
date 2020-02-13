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
import {Image, Text, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView, Alert} from 'react-native';
import React from 'react';
import { db } from '../config';
import PropTypes from 'prop-types';


var accountNames = ["Tien Nguyen", "Matthew Schwartzkopf"]
function Separator(){
  return <View style={styles.separator} />;
}
let name = null, desc = null, url = null, date = null ;

function handleDetail(eDate, eDesc, eName, eUrl){
  name = eName;
  desc = eDesc;
  url = eUrl;
  date = eDate;
}
class EventPageDetail extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };
  render() {
    let key = "/Events/" + this.props.navigation.state.params.key;
    key = 
    db.ref(key).on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      {handleDetail(items[0],items[1],items[2],items[3]);}
    })
 
    return (
      <View>
        <Text></Text>
        {/* Title/Username - Can properly add names once Login is added*/}
        <Text id='username' style={styles.containerUsername}>
          Welcome to Event Page {accountNames[0]}
        </Text>
        <Separator/>
        <Text>Name: {name} </Text>
        <Text>Date: {desc} </Text>  
        <Text>DESC: {date} </Text>
        <Text>URL: {url} </Text>
        <SafeAreaView>
          <ScrollView>
            <TouchableOpacity
              style={styles.loginScreenButton}
              onPress={() => this.props.navigation.navigate('MyChat')}
              underlayColor='#fff'>
              <Separator/>
              <View>
              <Text style = {styles.text}>Go to Chat</Text>

              </View>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
              <Separator/>
              <View>
              <Text style = {styles.text}>Ask questions!</Text>
              <Text style = {styles.smalltext}>Not yet implemented!</Text>
              <Text style={styles.myStyle}>{this.props.navigation.state.params.key}</Text>
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
});

export default EventPageDetail;