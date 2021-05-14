import React, {Component} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import SectionBig from '../component/SectionBig';

export default class MainPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DataShowPage')}>
          <SectionBig
            title={'疫情数据展示'}
            detail={'图表展示国内及海外的疫情数据分布情况及发展趋势。'}
            icon={require('../res/icon/file-add.png')}
            iconColor={'#62D4A6'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForecastPage')}>
          <SectionBig
            title={'疫情预测'}
            detail={'根据不同模型，对疫情趋势进行预测。可自定义模型。'}
            icon={require('../res/icon/file-fore.png')}
            iconColor={'#9376F5'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DataShowPage')}>
          <SectionBig
            title={'病例溯源'}
            detail={'对每个已报告的病例进行溯源，为疫情控制与防范提供信息。'}
            icon={require('../res/icon/file-source.png')}
            iconColor={'#62CCD4'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
