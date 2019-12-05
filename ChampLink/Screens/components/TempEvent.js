/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';
import Colors from './Colors';
import type {Node} from 'react';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const links = [
  {
    title: 'Event',
    link: '/Users/tien.nguyen/Documents/capstoneReactNative/ChampLink/node_modules/react-native/Libraries/NewAppScreen/components/EventPage.js',
    description: "Current Events",
  },
  {
    title: 'Poll',
    link: '/Users/tien.nguyen/Documents/capstoneReactNative/ChampLink/node_modules/react-native/Libraries/NewAppScreen/components/PollPage.js',
    description:
      'Take a look at current Polls students are taking at Champlain College!!',
  },
  {
    title: 'Home Page',
    link: 'https://www.champlain.edu/',
    description: 'Platform 9-3/4 to Home Page',
  },
  {
    title: 'Professors',
    link: 'https://www.champlain.edu/academics/our-faculty/all-faculty',
    description:
      'Professors at Champlain College',
  },

  {
    title: 'Code references',
    link: 'https://facebook.github.io/react-native/',
    description:
      'This is where we learned React Native from.',
  },
];

const LinkList = (): Node => (
  <View style={styles.container}>
    {links.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <View style={styles.separator} />
          <TouchableOpacity
            accessibilityRole={'button'}
            onPress={() => openURLInBrowser(item.link)}
            style={styles.linkContainer}>
            <Text style={styles.link}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </TouchableOpacity>
        </React.Fragment>
      );
    })}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  linkContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: Colors.dark,
  },
  separator: {
    backgroundColor: Colors.light,
    height: 1,
  },
});

export default LinkList;
