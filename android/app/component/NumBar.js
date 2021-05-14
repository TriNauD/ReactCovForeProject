import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import NumSquare from '../component/NumSquare';
class NumBar extends Component {
  static defaultProps = {
    curDiagnosis: 1000,
    cumuDiagnosis: 10000,
    cumuCure: 5000,
    cumuDeath: 100,
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
        <NumSquare title={'现存确诊'} numColor={'#F94141'} num={this.props.curDiagnosis}/>
        <NumSquare title={'累计确诊'} numColor={'#F9AC00'} num={this.props.cumuDiagnosis}/>
        <NumSquare title={'累计治愈'} numColor={'#45F900'} num={this.props.cumuCure}/>
        <NumSquare title={'累计死亡'} numColor={'#9B9D9A'} num={this.props.cumuDeath}/>
      </View>
    );
  }
}

export default NumBar;
