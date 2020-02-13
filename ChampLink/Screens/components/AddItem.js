// This file is based off of
// https://blog.jscrambler.com/integrating-firebase-with-react-native/
//

import React, { Component } from 'react';
import { db } from '../config';
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Alert
} from 'react-native';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3e9e4ccf-100e-4f02-9151-768b4e9475de/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:3e9e4ccf-100e-4f02-9151-768b4e9475de';
const CHATKIT_USER_NAME = 'Dave';

export default class AddItem extends Component {
  state = {
    title: '',
    names: '',
    desc: '',
    date: '',
    url: '',
};

  addItem(name, desc, date, url) {
    db.ref('/Events').push({
      name: name,
      desc: desc,
      date: date,
      url: url
    });
  };

  handleSubmit = () => {
    this.addItem(this.state.names, this.state.desc, this.state.date, this.state.url);
    this.createRoom();
    Alert.alert('Event saved successfully');
  };

/*
  // PUSHER and Firebase Info
  componentDidMount() {
    const tokenProvider = new TokenProvider({
      url: CHATKIT_TOKEN_PROVIDER_ENDPOINT,
    });

    const chatManager = new ChatManager({
      instanceLocator: CHATKIT_INSTANCE_LOCATOR,
      userId: CHATKIT_USER_NAME,
      tokenProvider: tokenProvider,
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        this.currentUser.subscribeToRoom({
          roomId: this.navigate,
          hooks: {
            onMessage: this.onReceive,
          },
        });
      })
      .catch(err => {
        console.log("FUCK");
        console.log(err);
      });
  }
  // Create a room
  createRoom() {
    const room = this.currentUser.createRoom({
        id: this.state.name,
        name: navigation.state.params.items,
        private: false,
    }) .catch(err => {
      console.log(err);
    });
  }
  */

  render() {
    return (
      <View style={styles.main}>

        <Text style={styles.title}>Event Name</Text>
        <TextInput style={styles.itemInput} onChange={(value) => this.setState({ value })} value={this.state.names} />

        <Text style={styles.title}>Event Description</Text>
        <TextInput style={styles.itemInput} onChange={(value) => this.state.desc} />

        <Text style={styles.title}>Date of Event</Text>
        <TextInput style={styles.itemInput} onChange={(value) => this.state.date} />

        <Text style={styles.title}>URL for More Information</Text>
        <TextInput style={styles.itemInput} onChange={(value) => this.state.url} />

        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}>
            
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