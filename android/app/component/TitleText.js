import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';

class TitleText extends Component {
  static defaultProps = {
    title: 'title',
    subTitle: 'subtitle',
  };
  render() {
    const {title, subTitle} = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <View
          style={{
            height: 20,
            width: 4,
            backgroundColor: 'rgba(45, 119, 249, 100)',
          }}
        />
        <Text
          style={{
            marginLeft: 8,
            color: 'rgba(45, 119, 249, 100)',
            fontSize: 18,
            textAlign: 'left',
          }}>
          {this.props.title}
        </Text>
        <Text
          style={{
            marginLeft: 8,
            color: 'rgba(213, 213, 213, 100)',
            fontSize: 15,
            textAlign: 'left',
          }}>
          {this.props.subTitle}
        </Text>
      </View>
    );
  }
}

export default TitleText;
