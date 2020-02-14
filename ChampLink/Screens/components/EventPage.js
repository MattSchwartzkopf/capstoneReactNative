// This file is modified from
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import CreateRoom from '../components/CreateRoom';
import { db } from '../config';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

let itemsRef = db.ref('/Events');

export default class List extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    })
    itemsRef.on("child_added", snapshot => {
      this.state.id = snapshot.key;
    })
  }

  render() {
    return (
      <View>
        <Text style={styles.theTitle}>
          Event List
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddItem')}>
            <Text style={styles.createEventButton}>Create an Event</Text>
        </TouchableOpacity>
      <ScrollView>
        <View style={styles.container}>
          {this.state.items.length > 0 ? (
            <View style={styles.container}>
                <ItemComponent items={this.state.items} id={this.state.id}/>

            </View>
          ) : (
            <Text>No items</Text>
          )}
        </View>
      </ScrollView>
      </View>
    );
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'grey',
    paddingBottom: 75,
  },
  theTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 36,
    color: 'lightgrey',
    backgroundColor: '#005393',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 1,
    paddingBottom: 5,
    textDecorationLine: 'underline',
  },
  createEventButton: {
    color: 'orange',
    backgroundColor: 'brown',
    textAlign: 'center',
    paddingBottom: 5,
    paddingTop: 5,
    fontWeight: 'bold',
    fontSize: 20,
  }
});