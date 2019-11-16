



/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  Features,
  Colors,
  EventPage,
  LearnMoreLinks,
  LoginPage,
  HomeScreen,
} from 'react-native/Libraries/NewAppScreen';

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
  LoginPage: {
    screen: LoginPage
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