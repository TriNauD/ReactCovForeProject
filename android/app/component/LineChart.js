import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

class LineChart extends Component {
  static defaultProps = {
    height: 115,
    width: 350,
  };
  render() {
    const {backgroundColor, size} = this.props;
    return (
      <View
        style={{
          height: 500,
          width: 350,
          marginTop: 10,
          backgroundColor: '#66ccff',
        }}></View>
    );
  }
}

export default LineChart;
