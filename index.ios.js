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

class App extends Component {
  onRightButtonPress = () => {
      this.refs.nav.push({
        title: 'From Right',
        component: Something
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
          title: 'Go Home!',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Walk', () => App);
