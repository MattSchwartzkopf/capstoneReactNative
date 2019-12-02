// This file is based off of
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class ItemComponent extends Component {
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
            <TouchableOpacity>
              <View key={index} style={styles.eventSpacing}>
                <Text style={styles.eventBox}>{item.name}</Text>
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
  eventBox: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 80,
    paddingBottom: 80,
    backgroundColor: '#02634b',
  },
  eventSpacing: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
});