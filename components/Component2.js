import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollableList
} from 'react-native';

export default class Component2 extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <View style={ styles.row }>
          <View style={ [styles.column, styles.green] }>
            <Text>Sup</Text>
          </View>
          <View style={ [styles.column, styles.red] }>
            <Text>Sup</Text>
          </View>
          <View style={ [styles.column, styles.blue] }>
            <Text>Sup</Text>
          </View>
        </View>
        <View style={ styles.doubleRow }>
          <View style={ [styles.column, styles.lightBlue] }></View>
          <View style={ styles.column }>
            <View style={ [styles.column, styles.black] }></View>
            <View style={ styles.row }>
              <View style={ [styles.column, styles.lightGreen] }></View>
              <View style={ [styles.column, styles.green] }></View>
            </View>
          </View>
        </View>
        <View style={ [styles.row, styles.red] }></View>
        <View style={ [styles.row, styles.green] }></View>
        <View style={ [styles.row, styles.blue] }></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 64,
    flex: 1
  },
  row: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row'
  },
  doubleRow: {
    flex: 2,
    flexDirection: 'row'
  },
  column: {
    flex: 1
  },
  lightGreen: {
    backgroundColor: 'lightgreen'
  },
  black: {
    backgroundColor: 'black'
  },
  blue: {
    backgroundColor: 'blue'
  },
  red: {
    backgroundColor: 'red'
  },
  green: {
    backgroundColor: 'green'
  },
  lightBlue: {
    backgroundColor: 'lightblue'
  }
});
