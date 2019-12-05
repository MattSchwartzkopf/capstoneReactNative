/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import type {Node} from 'react';
import {Platform, StyleSheet, Text} from 'react-native';
import React from 'react';

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
});

const WhatIsChampLink: () => Node = Platform.select({
  ios: () => (
    <Text>
       For years, we've been taught to believe that breakfast is the most important meal of the day. But is it really tho ?
       And why is it that you can only have breakfast in the morning ? Isn't it always morning somewhere on Earth ?
    </Text>
  ),
  default: () => (
    <Text>
      Double tap <Text style={styles.highlight}>R</Text> on your keyboard to
      reload your app's code.
    </Text>
  ),
});

export default WhatIsChampLink;
