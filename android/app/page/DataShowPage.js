import React, {Component} from 'react';
import {Text, View} from 'react-native';
import NumBar from '../component/NumBar';
import LineChart from '../component/LineChart';
import TitleText from '../component/TitleText';

export default class DataShowPage extends Component {
  render() {
    return (
      <View
        style={{
          height: 500,
          margin: 20,
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          elevation: 4,
        }}>
        <TitleText title={'疫情数据'} subTitle={'（截止到3月14日09时）'}/>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <NumBar />
          <LineChart />
        </View>
      </View>
    );
  }
}
