import React, {Component} from 'react';
import {Text, View} from 'react-native';
import TitleText from '../component/TitleText';
import NumBar from '../component/NumBar';
import ELineChart from '../component/ELineChart';

const numBarData = [11, 4514, 1919, 810];

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
        }}>
        <TitleText title={'疫情数据'} subTitle={'（截止到3月14日09时）'} />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <NumBar
            curDiagnosis={numBarData[0]}
            cumuDiagnosis={numBarData[1]}
            cumuCure={numBarData[2]}
            cumuDeath={numBarData[3]}
          />
          <ELineChart width={350} height={115} />
        </View>
      </View>
    );
  }
}
