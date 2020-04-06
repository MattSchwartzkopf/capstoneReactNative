  /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  EventPage,
  DisplayPollsForAnEvent,
  LoginPage,
  ItemComponentManageUser,
  ManageUserPage,
  MyMapPage,
  HomeScreen,
  MyChat,
  EventPageDetail,
  PollPageDetail,
  PollPage,
  AddItem,
  AddPerson,
  AddItemPolls,
  ItemComponentPollsForEvent,
  AddPollEvent,
  ItemComponentPolls,
  CreateRoom,
} from './Screens/'

{/* This is what the pages are navigated with, essentially like a `main` */}
export default class App extends React.Component {
  render() {
    return <MenuOrganizer />;
  }
}

{/* This is where the pages are defined for navigation */}
{/* Also note, they're loaded in the order they're listed below */}
const AppNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  EventPage: {
    screen: EventPage
  },
  EventPageDetail: {
    screen: EventPageDetail
  },
  PollPageDetail: {
    screen: PollPageDetail
  },
  PollPage: {
    screen: PollPage
  },
  LoginPage: {
    screen: LoginPage
  },
  ItemComponentManageUser: {
    screen: ItemComponentManageUser
  },
  ManageUserPage: {
    screen: ManageUserPage
  },
  MyMapPage: {
    screen:MyMapPage
  },
  MyChat: {
    screen: MyChat
  },
  AddPerson: {
    screen: AddPerson
  },
  ItemComponentPollsForEvent: {
    screen: ItemComponentPollsForEvent
  },
  AddItem: {
    screen: AddItem
  },
  AddItemPolls: {
    screen: AddItemPolls
  },
  DisplayPollsForAnEvent: {
    screen: DisplayPollsForAnEvent
  },
  AddPollEvent: {
    screen: AddPollEvent
  },
  ItemComponentPolls: {
    screen: ItemComponentPolls
  },
  CreateRoom: {
    screen: CreateRoom
  }
});

{/* Creating what stores the navigation pages */}
const MenuOrganizer = createAppContainer(AppNavigator);

{/* Styling for this page */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Links to help:
// https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
