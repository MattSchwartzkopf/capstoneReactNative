// This file is based off of
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';

class ItemComponent extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    ids: PropTypes.array.isRequired
  };

  render() {
    return (
      /* This is where the view of each is configured */
      <View style={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            // Each event is spaced individually here
            <TouchableOpacity onPress={() => { Linking.openURL(item.url);}}>
              <View key={index} style={styles.eventSpacing}>
                <Text style={styles.eventBoxName}>{item.name}</Text>
                <Text style={styles.eventBoxDesc}>{item.desc}</Text>
                <Text style={styles.eventBoxDate}>{item.date}</Text>
                <Text style={styles.eventBoxDate}>{this.props.id}</Text>
                <View style={styles.centerEnterChat}>
                <GotoEvent id={this.props.id}/>
                <TouchableOpacity style={styles.chatRoom} onPress={() => {
                    this.props.navigation.navigate("MyChat", {items: item.name},)}}><Text style={styles.chatRoomText}>Join Chat</Text>
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
  },
  chatRoom: {
    alignItems: 'center',
    fontSize: 40,
  },
  chatRoomText: {
    color: 'white',
    fontSize: 20,
    textDecorationStyle: "solid",
  }
});