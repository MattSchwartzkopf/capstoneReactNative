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

let itemsRef = db.ref('/Events');

function Separator(){
  return <View style={styles.separator} />;
}

let i=0, id=null, name = null, desc = null, url = null, date = null ;

function handleDetail(eDate, eDesc, eName, eUrl){
  name = eName;
  desc = eDesc;
  url = eUrl;
  date = eDate;
}

class EventPageDetail extends React.Component {
  state = {
    name: '',
    key: [],
    events: [],
  }
  static propTypes = {
    items: PropTypes.array.isRequired,
    key: PropTypes.array.isRequired,
  };

  handleDetail(eDate, eDesc, eName, eUrl){
    id = this.state.key;
    name = eName;
    desc = eDesc;
    url = eUrl;
    date = eDate;
    this.state.events.push(id[i], eName, eDesc, eUrl, eDate);
    i++;
    //console.log(this.state.events);
    //console.log("       ");
  }

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    })
    itemsRef.on("child_added", snapshot => {
      this.state.id = snapshot.key;
      //console.log(snapshot.key)
      this.state.key.push(snapshot.key);
      let data = snapshot.val();
      let items = Object.values(data);
      console.log(snapshot.key, items[0],items[1],items[2],items[3]);
      //render(snapshot.key, items[0],items[1],items[2],items[3]);
      this.handleDetail(snapshot.key, items[0],items[1],items[2],items[3]);
      //console.log(this.state.events);
    })
  }

  render(id, name, date, desc, url) {
    return (
      /* This is where the view of each is configured */
      <View style={styles.itemsList}>
        {this.state.events.map((item, index) => {

          return (
            // Each event is spaced individually here
            <TouchableOpacity onPress={() => { Linking.openURL(item.url);}}>
              <View key={index} style={styles.eventSpacing}>
                <Text style={styles.eventBoxName}>{this.state.events[index]}</Text>
                <View style={styles.centerEnterChat}>
                
                </View>
              </View>
            </TouchableOpacity>
          );
      })
      }
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