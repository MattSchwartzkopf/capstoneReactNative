// This file is based off of
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

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
            // Each poll is spaced individually here
            <TouchableOpacity onPress={() => {this.props.navigation.navigate('PollPageDetail')}}>
              <View key={index} style={styles.eventSpacing}>
                <Text style={styles.eventBoxName}>{item.title}</Text>
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
    backgroundColor: '#02634b',
    textDecorationLine: 'underline'
  },
  eventBoxDesc: {
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#02634b',
  },
  eventBoxDate: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingTop: 5,
    paddingBottom: 5,
    backgroundColor: '#02634b',
    color: 'lightgrey',
  },
  eventSpacing: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  }
});