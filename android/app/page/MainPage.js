import React, {Component} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import IconBig from '../component/IconBig';
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
          <SectionBig />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('ForecastPage')}>
          <SectionBig />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('DataShowPage')}>
          <SectionBig />
        </TouchableOpacity>
      </View>
    );
  }
}
