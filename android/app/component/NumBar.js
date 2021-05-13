import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import NumSquare from '../component/NumSquare';
class NumBar extends Component {
  static defaultProps = {
    height: 115,
    width: 350,
  };
  render() {
    return (
      <View
        style={{
          height: 100,
          width: 350,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <NumSquare title={'现存确诊'} numColor={'#F94141'} />
        <NumSquare title={'累计确诊'} numColor={'#F9AC00'} />
        <NumSquare title={'累计治愈'} numColor={'#45F900'} />
        <NumSquare title={'累计死亡'} numColor={'#9B9D9A'} />
      </View>
    );
  }
}

export default NumBar;
