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
  Alert,
  ScrollView
} from 'react-native';

import { db } from '../config';

export default class AddItem extends Component {
  state = {
    title: '',
    desc: ''
  };

addItem(name, question, date, answer1, answer2) {
  db.ref('/PollForEvent').push({
    name: name,
    question: question,
    date: date,
    answer1: answer1,
    answer2: answer2,
  });
};

// CLEAN THIS UP BETTER VV - Duplicate Code (2 functions)
  handleChangeName = e => {
    this.setState({
      name: e.nativeEvent.text
    });
  };

  handleQuestion = e => {
    this.setState({
      question: e.nativeEvent.text
    });
  };

  handleChangeDate = e => {
    this.setState({
      date: e.nativeEvent.text
    });
  };

  handleAnswer1 = e => {
    this.setState({
      answer1: e.nativeEvent.text
    });
  };

  handleAnswer2 = e => {
    this.setState({
      answer2: e.nativeEvent.text
    });
  };
// ^^^^ Cleanup later

  handleSubmit = () => {
    this.addItem(this.state.name, this.state.question, this.state.date, this.state.answer1, this.state.answer2);
    Alert.alert('Poll For This Event is saved successfully');
  };

  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.title}>Author's Name</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangeName} />

        <Text style={styles.title}>Question</Text>
        <TextInput style={styles.itemInput} onChange={this.handleQuestion} />

        <Text style={styles.title}>Date Created</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChangeDate} />

        <Text style={styles.title}>Answer 1</Text>
        <TextInput style={styles.itemInput} onChange={this.handleAnswer1} />

        <Text style={styles.title}>Answer 2</Text>
        <TextInput style={styles.itemInput} onChange={this.handleAnswer2} />

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
    backgroundColor: '#005393',
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