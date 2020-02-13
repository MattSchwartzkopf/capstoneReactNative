import React from "react";
import { GiftedChat } from "react-native-gifted-chat";
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';

const CHATKIT_TOKEN_PROVIDER_ENDPOINT = 'https://us1.pusherplatform.io/services/chatkit_token_provider/v1/3e9e4ccf-100e-4f02-9151-768b4e9475de/token';
const CHATKIT_INSTANCE_LOCATOR = 'v1:us1:3e9e4ccf-100e-4f02-9151-768b4e9475de';
const CHATKIT_ROOM_ID = 'Information Session and Tour';
const CHATKIT_USER_NAME = 'Dave';

export default class MyChat extends React.Component {
  constructor(props) {
    super(props);
    this.navigate = this.props.navigation.state.params.items; }
    
  // Grabs parameters given
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.items}`,
  });
    state = {
    messages: []
  };

  // Handles receiving and displaying the messages in the chat
  onReceive = data => {
    const { id, senderId, text, createdAt } = data;
    const incomingMessage = {
      _id: id,
      text: text,
      createdAt: new Date(createdAt),
      user: {
        _id: senderId,
        name: senderId,
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmXGGuS_PrRhQt73sGzdZvnkQrPXvtA-9cjcPxJLhLo8rW-sVA',
      },
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, incomingMessage),
    }));
  };

  // Sends a message to user in chat room
  onSend = (messages = []) => {
    messages.forEach(message => {
      this.currentUser
        .sendMessage({
          text: message.text,
          roomId: this.navigate,
        })
        .then(() => {})
        .catch(err => {
          console.log(err);
        });
    });
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
          roomId: this.navigate,
          hooks: {
            onMessage: this.onReceive,
          },
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <GiftedChat
      messages={this.state.messages}
      onSend={messages => this.onSend(messages)}
      user={{_id: CHATKIT_USER_NAME}}
      />
    );
  }
}