import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ItemComponent from '../components/ItemComponent';
import { db } from '../config';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Chatkit from '@pusher/chatkit-client';
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import PropTypes from 'prop-types';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3e9e4ccf-100e-4f02-9151-768b4e9475de/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:3e9e4ccf-100e-4f02-9151-768b4e9475de';
const CHATKIT_ROOM_ID = 'f017ac6a-2f4a-46c1-af5c-c9487dd06d87';
const CHATKIT_USER_NAME = 'Dave';

export default class CreateRoom extends React.Component {
  static propTypes = {
    items: PropTypes.array.isRequired
  };

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
          roomId: this.props.items.name,
          hooks: {
            onMessage: this.onReceive,
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  subscribeRoom() {
    currentUser
    .subscribeToRoom({
      roomId: presenceRoomId,
      // action hooks. These functions will be executed when any of the four events below happens
      hooks: {
        onUserCameOnline: this.handleInUser,
        onUserJoinedRoom: this.handleInUser,
        onUserLeftRoom: this.handleOutUser,
        onUserWentOffline: this.handleOutUser
      }
    })
  }
  
  addUserToRoom() {
    const { newUser, currentUser, currentRoom } = this;
    currentUser.addUserToRoom({
      userId: CHATKIT_USER_NAME,
      roomId: this.props.items.name
    })
      .then((currentRoom) => {
        this.roomUsers = currentRoom.users;
      })
      .catch(err => {
        console.log(`Error adding user: ${err}`);
      });

    this.newUser = '';
  }

  // Create a room
  createRoom() {
    const room = this.currentUser.createRoom({
        id: this.props.items.name,
        name: this.props.items.name,
        private: false,
    }) .catch(err => {
      console.log("nope");
    });  
  }
    
  main() {
    this.componentDidMount();
    this.subscribeToRoom();
    this.addUserToRoom();
  }
      render() {
        return (
          <View>
              <TouchableOpacity onPress={() => {this.main}}>
                  <Text>Join Chat Room</Text>
              </TouchableOpacity>
          </View>
        );
      }
}