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
import firebase from 'firebase';
import { db } from '../config';



export default class AddItem extends Component {
  state = {
    title: '',
    desc: ''
  };

  //Pull information from firebase and put them into myRef and key2
addItem(name, desc, date, url, key) {
  var myRef = firebase.database().ref('/Events').push();
  var key2 = myRef.key;

 //Update information on Firebase.
  myRef.update({
    name: name,
    desc: desc,
    date: date,
    url: url,
    key: key2,
    yes: 0,
    maybe: 0,
    no: 0,
  })
};

//Handle changing information that user inputs
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

  handleChangeUrl = e => {
    this.setState({
      url: e.nativeEvent.text
    });
  };


//Handle user input and run each funtion to enter data into local vars
  handleSubmit = () => {
    this.addItem(this.state.name, this.state.desc, this.state.date, this.state.url);
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

        <Text style={styles.title}>URL for More Information</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangeUrl} />

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