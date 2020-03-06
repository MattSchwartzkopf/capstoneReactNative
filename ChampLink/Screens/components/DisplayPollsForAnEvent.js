// This file is modified from
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ItemComponentPolls from '../components/ItemComponentPolls';

import { db } from '../config';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

let itemsRef = db.ref('/PollForEvent');

export default class List extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    itemsRef.on('value', snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);
      this.setState({ items });
    });
  }

  render() {
    return (
      <View>

        <Text style={styles.theTitle}>
          Champlain Poll
        </Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddItemPolls')}>
            <Text style={styles.createEventButton}>Create a Poll</Text>
        </TouchableOpacity>

      <ScrollView>
        <View style={styles.container}>
          {this.state.items.length > 0 ? (
            <ItemComponentPolls items={this.state.items} />
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