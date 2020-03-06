// This file is based off of
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking, Alert, Image } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import * as firebase from 'firebase';

class ItemComponent extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
  };

  render() {
    <body>
    <script src="/__/firebase/7.5.2/firebase-app.js"></script>
    <script src="/__/firebase/7.5.2/firebase-analytics.js"></script>
    <script src="/__/firebase/7.5.2/firebase-auth.js"></script>
    <script src="/__/firebase/7.5.2/firebase-firestore.js"></script>
    <script src="/__/firebase/init.js"></script>
  </body>
    return (
      /* This is where the view of each is configured */
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            // Each event is spaced individually here
              <View key={index} style={styles.eventSpacing}>
              <Text style={styles.eventBoxDesc}>{item.name} -:- {item.permission}</Text>
              </View>
          );
        })}
      </View>
    );
  }
}
export default withNavigation(ItemComponent);

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#005393'
  },
  eventBoxName: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 10,
    backgroundColor: '#28724f',
    textDecorationLine: 'underline'
  },
  eventBoxDesc: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#28724f',
  },
  eventBoxDate: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',                    
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#28724f',
    color: 'lightgrey',
  },
  eventSpacing: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  centerEnterChat: {
    alignItems: 'center',
  },
  chatRoom: {
    alignItems: 'center',
    fontSize: 40,
  },
  chatRoomText: {
    color: 'white',
    fontSize: 20,
    textDecorationStyle: "solid",
  },
  imageSize: {
    width: 400,
    height: 200,
  }
});