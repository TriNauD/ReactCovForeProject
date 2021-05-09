import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class MainPage extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Data Show Page</Text>
        <Button
          title="btn1"
          onPress={() => this.props.navigation.navigate('DataShowPage')}>
          btn
        </Button>
        <Text>Forecast Page</Text>
        <Button
          title="btn2"
          onPress={() => this.props.navigation.navigate('ForecastPage')}>
          btn
        </Button>
        <Text>Trace Page</Text>
        <Button title="btn3">btn</Button>
      </View>
    );
  }
}
