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

addItem(name, permission) {
  db.ref('/UserPermission').push({
    name: name,
    permission: permission
  });
};

// CLEAN THIS UP BETTER VV - Duplicate Code (2 functions)
  handleChangeName = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };

  handleChangePermission = e => {
    this.setState({
      permission: e.nativeEvent.text
    });
  };


// ^^^^ Cleanup later

  handleSubmit = () => {
    this.addItem(this.state.name, this.state.permission);
    Alert.alert('Event saved successfully');
  };

  render() {
    return (
      <View style={styles.main}>

        <Text style={styles.title}>Name</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangeName} />

        <Text style={styles.title}>Permission: (Admin, Organizer, User)</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangePermission} />

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
    backgroundColor: '#005393',
    paddingTop: 100,
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