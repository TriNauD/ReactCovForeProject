import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import IconBig from '../component/IconBig';

class SectionBig extends Component {
  static defaultProps = {
    height: 115,
    width: 350,
    icon: require('../res/icon/file-add.png'),
    iconSize: 100,
    iconColor: '#66ccff',
    title: 'title',
    detail: 'detail',
  };
  render() {
    const {backgroundColor, size, source} = this.props;
    return (
      <View
        style={{
          width: this.props.width,
          height: this.props.height,
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
          elevation: 4,
          flexDirection: 'row',
          marginBottom: 15,
        }}>
        <View
          style={{
            width: this.props.width * 0.3,
            height: this.props.height,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <IconBig
            size={75}
            icon={this.props.icon}
            iconSize={35}
            iconBackgroundColor={this.props.iconColor}
          />
        </View>
        <View
          style={{
            width: 200,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'PingFangSC-regular',
            }}>
            {this.props.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'PingFangSC-regular',
            }}>
            {this.props.detail}
          </Text>
        </View>
      </View>
    );
  }
}

export default SectionBig;
