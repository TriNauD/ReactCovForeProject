import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import SectionMedium from '../component/SectionMedium';
import IconBig from '../component/IconBig';

export default class ModelManagePage extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', marginTop: 40}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CreateModelPage')}>
          <SectionMedium title={'群体免疫'} detail={'群体免疫模型'}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CreateModelPage')}>
          <SectionMedium title={'群体免疫'} detail={'分为三级控制'}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('CreateModelPage')}>
          <SectionMedium title={'群体免疫'} detail={'传染病模型'}/>
        </TouchableOpacity>
        <View style={{marginTop: 100}}> 
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CreateModelPage')}>
            <IconBig
              size={60}
              icon={require('../res/icon/plus.png')}
              iconSize={20}
              iconBackgroundColor={'#2D77F9'}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
