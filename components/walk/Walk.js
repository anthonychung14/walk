import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TouchableHighlight
} from 'react-native';

import Component2 from '../Component2';

import styles from './styles/walkStyles.js'
console.log('testing??!?!?!');
export default class Walk extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={ () => {
          this.props.navigator.push({
            title: 'something new',
            component: Component2
          })
        } }>
          <Text>Touch me</Text>
        </TouchableHighlight>
        <Text style={ styles.welcome }>
          Welcome to React!
        </Text>
        <Text style={ styles.instructions }>
          To get started, edit index.ios.js
        </Text>
        <Text style={ styles.instructions }>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}
