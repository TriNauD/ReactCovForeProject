import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

class NumBar extends Component {
  static defaultProps = {
    height: 115,
    width: 350,
  };
  render() {
    const {backgroundColor, size} = this.props;
    return (
      <View style={{
        height:100,
        width: 350,
        backgroundColor: '#66ccff',
        marginTop: 10,
      }}>
      </View>
    );
  }
}

export default NumBar;
