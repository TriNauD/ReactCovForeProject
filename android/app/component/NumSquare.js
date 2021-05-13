import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

class NumSquare extends Component {
  static defaultProps = {
    title: 'title',
    numColor: '#FFFFFF',
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 14,
          }}>
          {this.props.title}
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: this.props.numColor,
          }}>
          Number
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: 'rgba(213, 213, 213, 100)',
          }}>
          Detail
        </Text>
      </View>
    );
  }
}

export default NumSquare;
