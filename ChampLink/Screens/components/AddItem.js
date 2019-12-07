// This file is based off of
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';

import { db } from '../config';



export default class AddItem extends Component {
  state = {
    title: '',
    desc: ''
  };

addItem(name, desc, date) {
  db.ref('/Events').push({
    name: name,
    desc: desc,
    date: date
  });
};

// CLEAN THIS UP BETTER VV - Duplicate Code (2 functions)
  handleChangeName = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };

  handleChangeDesc = e => {
    this.setState({
      desc: e.nativeEvent.text
    });
  };

  handleChangeDate = e => {
    this.setState({
      date: e.nativeEvent.text
    });
  };
// ^^^^ Cleanup later

  handleSubmit = () => {
    this.addItem(this.state.name, this.state.desc, this.state.date);
    Alert.alert('Event saved successfully');
  };

  render() {
    return (
      <View style={styles.main}>

        <Text style={styles.title}>Event Name</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangeName} />

        <Text style={styles.title}>Event Description</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangeDesc} />

        <Text style={styles.title}>Date of Event</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangeDate} />

        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom: 400,
    backgroundColor: '#005393'
  },
  title: {
    paddingTop: 20,
    marginBottom: 10,
    fontSize: 25,
    textAlign: 'center'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});