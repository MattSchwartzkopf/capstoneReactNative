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
    title: 'Brian: ',
    link: 'https://www.champlain.edu/events-calendar',
    description: "Because we need a reason to eat as soon as we wake up so we eat breakfast.",
  },
  {
    title: 'Randy:',
    link: '/Users/tien.nguyen/Documents/capstoneReactNative/ChampLink/node_modules/react-native/Libraries/NewAppScreen/components/PollPage.js',
    description:
      'Breakfast is bad because we dont even brush our teeth before eating breakfast.',
  },
  {
    title: 'Matthew:',
    link: '/Users/tien.nguyen/Documents/capstoneReactNative/ChampLink/node_modules/react-native/Libraries/NewAppScreen/components/PollPage.js',
    description:
      'You get hungry, You eat.',
  },
  {
    title: 'Andrea',
    link: '/Users/tien.nguyen/Documents/capstoneReactNative/ChampLink/node_modules/react-native/Libraries/NewAppScreen/components/PollPage.js',
    description:
      'What is breakfast ?',
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
    marginTop: 10,
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
    flex: 1,
    fontSize: 15,
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
