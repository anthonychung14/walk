import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Something extends Component {
  render() {
    return (
        <View style={ styles.contaner }>
          <Text style={ styles.text }>
            Component 1
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 100
  }
});
