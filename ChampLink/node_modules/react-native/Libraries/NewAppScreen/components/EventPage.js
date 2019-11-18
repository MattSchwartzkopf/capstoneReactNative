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
import {Text, StyleSheet, View, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';

var accountNames = ["Tien Nguyen", "Matthew Schwartzkopf"]

class EventPage extends React.Component<{}> {
  render() {
    return (
      <View>
        <Text></Text>
        {/* Title/Username - Can properly add names once Login is added*/}
        <Text id='username' style={styles.containerUsername}>
          Name: {accountNames[0]}
        </Text>

        {/* ID Number */}
        <Text id='idNumber' style={styles.containerIdNumber}>
          ID: ####1233 - 14
        </Text>

        {/* Poll */}
        <Text id='pollInfo' style={styles.containerPollInfo}>
          Poll #341: Why is the Earth flat?
        </Text>

        <SafeAreaView>
          <ScrollView>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
                 
              <View>
              <Text style = {styles.submitButtonText}> Submit </Text>
              </View>
               
            </TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
      </View>
      );
    }
  }


const styles = StyleSheet.create({
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
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default EventPage;