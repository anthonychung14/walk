/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

import Something from './components/Something';
import Component2 from './components/Component2';
import Walk from './components/walk/Walk';
import HealthKit from './components/HealthKit';

class App extends Component {
  onRightButtonPress = () => {
      this.refs.nav.push({
        title: 'From Right',
        component: HealthKit
      });
  };

  onLeftButtonPress = () => {
    this.refs.nav.push({
      title: 'From Left',
      component: Component2
    });
  };

  render() {
    return (
      <NavigatorIOS
        ref="nav"
        initialRoute={{
          component: Walk,
          title: 'Home',
          leftButtonTitle: 'Go Left',
          onLeftButtonPress: this.onLeftButtonPress,
          rightButtonTitle: 'Go Right',
          onRightButtonPress: this.onRightButtonPress
        }}
        style={ { flex: 1 } }
      />
    );
  }
}

AppRegistry.registerComponent('Walk', () => App);
