// This file is based off of
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React, { Component } from 'react';
import {Button, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';
import GoToChat from './GoToChat';
import GotoEvent from './GotoEvent';
import CreateRoom from './CreateRoom';
import { withTheme } from 'react-native-elements';

export default class ItemComponent extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

  render() {
    return (
      /* This is where the view of each is configured */
      <View style={styles.itemsList}>
        
        {this.props.items.map((item, index) => {
          return (
            // Each event is spaced individually here
            <TouchableOpacity onPress={() => {Linking.openURL(item.url);}}>
              <View key={index} style={styles.eventSpacing}>
                <Text style={styles.eventBoxName}>{item.name}</Text>
                <Text style={styles.eventBoxDesc}>{item.desc}</Text>
                <Text style={styles.eventBoxDate}>{item.date}</Text>
                <View style={styles.centerEnterChat}>

                <TouchableOpacity>
                  <CreateRoom items={item} />
                </TouchableOpacity>

                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

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
    paddingTop: 10,
    paddingBottom: 20,
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
  }
});