import React, {Component} from 'react';
import {View, TouchableOpacity} from 'react-native';
import SectionBig from '../component/SectionBig';

export default class ForecastPage extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CreateForecastPage')}>
          <SectionBig
            title={'新建预测'}
            detail={'选择模型和曲线类型新建预测'}
            icon={require('../res/icon/file-add.png')}
            iconColor={'#62D4A6'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ModelManagePage')}>
          <SectionBig
            title={'模型管理'}
            detail={'管理已有模型或新建自定义模型'}
            icon={require('../res/icon/file-fore.png')}
            iconColor={'#9376F5'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
