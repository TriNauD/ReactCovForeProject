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
          <SectionBig icon={require('../res/icon/file-add.png')} iconColor={'#62D4A6'}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForecastPage')}>
          <SectionBig icon={require('../res/icon/file-fore.png')} iconColor={'#9376F5'}/>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DataShowPage')}>
          <SectionBig icon={require('../res/icon/file-source.png')} iconColor={'#62CCD4'}/>
        </TouchableOpacity>
      </View>
    );
  }
}
