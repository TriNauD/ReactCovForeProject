import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class ForecastPage extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Create Forecast Page</Text>
        <Button
          title="createFore"
          onPress={() => this.props.navigation.navigate('CreateForecastPage')}>
          btn
        </Button>
        <Text>Model Manage Page</Text>
        <Button
          title="modelManage"
          onPress={() => this.props.navigation.navigate('ModelManagePage')}>
          btn
        </Button>
      </View>
    );
  }
}
