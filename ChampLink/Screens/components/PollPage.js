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
function Separator(){
  return <View style={styles.separator} />;
}
class PollPage extends React.Component<{}> {
  render() {
    return (
      <View>
        <Text></Text>
        {/* Title/Username - Can properly add names once Login is added*/}
        <Text id='username' style={styles.containerUsername}>
          Welcome to PollPage {accountNames[0]}
        </Text>
        <SafeAreaView>
          <ScrollView>
          <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('PollPageDetail')}>
              <Separator/>
              <View>
              <Text style = {styles.text}> Poll 1 Button</Text>
              <Text style = {styles.smalltext}>Poll 1 description and stuff</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('PollPageDetail')}>
              <Separator/>
              <View>
              <Text style = {styles.text}> Poll 2 Button</Text>
              <Text style = {styles.smalltext}>Poll 2 description and stuff</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('PollPageDetail')}>
              <Separator/>
              <View>
              <Text style = {styles.text}> Poll 3 Button</Text>
              <Text style = {styles.smalltext}>Poll 3 description and stuff</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('EventPage')}>
              <Separator/>
              <View>
              <Text style = {styles.text}> Create Poll Button</Text>
              <Text style = {styles.smalltext}>Not yet Implemented</Text>
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
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
  smalltext: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});

export default PollPage;