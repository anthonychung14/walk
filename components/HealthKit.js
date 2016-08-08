import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';


import AppleHealthKit from 'react-native-apple-healthkit';

let options = {
    permissions: {
        read: ["StepCount"],
        write: []
    }
};

const AHKPERMS = AppleHealthKit.Constants.Permissions;
const AHKOPTIONS = {
  permissions: {
    read: [
      AHKPERMS.StepCount,
      AHKPERMS.DistanceWalkingRunning,
      AHKPERMS.FlightsClimbed,
      AHKPERMS.Height,
      AHKPERMS.DateOfBirth,
      AHKPERMS.BiologicalSex
    ],
    write: [
      AHKPERMS.StepCount
    ]
  }
};

export default class HealthKit extends Component {
  constructor() {
    super();
    this.state = {
      fetchedStepsToday: false,
      fetchedStepsHistory: false,
      stepsToday: 0,
      stepHistory: [],
      error: null
    };
  }

  componentDidMount() {
    AppleHealthKit.isAvailable((err, available) => {
      if (available) {
        AppleHealthKit.initHealthKit(AHKOPTIONS, (err, res) => {
          if (this._handleHKError(err, 'initHealthKit')) {
            return;
          }
          this._fetchStepsToday();
          this._fetchStepsHistory();
        });
      }
    });
  }

  _fetchStepsToday = () => {
    AppleHealthKit.getStepCount(null, (err, steps) => {
      if (this._handleHKError(err, 'getStepCount')) {
        return;
      }
      this.setState({
        stepsToday: steps.value,
        fetchedStepsToday: true
      });
    });
  }

  _fetchStepsHistory = () => {
    let options = {
      startDate: (new Date(2016, 8, 3).toISOString())
    };
    AppleHealthKit.getDailyStepCountSamples(options, (err, res) => {
      if (this._handleHKError(err, 'getDailyStepCountSamples')) {
        return;
      }
      this.setState({
        stepHistory: res,
        fetchedStepsHistory: true
      });
    });
  }

  _handleHKError = (err, method) => {
    if (err) {
      let errStr = `HealthKit_ERROR[${method}] : `;
      errStr += (err && err.message) ? err.message : err;
      console.log(errStr);
      return true;
    }
    return false;
  }

  render() {
    return (
        <View style={ styles.container }>
          { !this.state.fetchedStepsToday ?
            <Image
              style={ styles.image }
              source={require('../assets/gif/ripple.gif')}
            /> :
            <Text>
              { `stepsToday: ${this.state.stepsToday}` }
            </Text>
          }
          { !this.state.fetchedStepsHistory ?
            <Image
              style={ styles.image }
              source={require('../assets/gif/ripple.gif')}
            /> :
            <Text>
              { `stepsToday: ${JSON.stringify(this.state.stepHistory)}` }
            </Text>
          }
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
  },
  image: {
    width: 140,
    height: 140,
  }
});
