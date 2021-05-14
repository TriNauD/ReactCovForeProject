import React, {Component, PropTypes} from 'react';
import {View, Text} from 'react-native';
import IconBig from './IconBig';

class SectionMedium extends Component {
  static defaultProps = {
    height: 90,
    width: 330,
    icon: require('../res/icon/file-add.png'),
    iconSize: 100,
    iconColor: '#66ccff',
    title: 'title',
    detail: 'detail',
  };
  render() {
    const {height, width, source} = this.props;
    return (
      <View
        style={{
          marginBottom: 15,
          elevation: 4,
          width: this.props.width,
          height: this.props.height,
          flexDirection: 'row',
          backgroundColor: '#FFFFFF',
          borderRadius: 10,
        }}>
        <View
          style={{
            elevation: 8,
            width: this.props.width * 0.75,
            height: this.props.height,
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            borderRadius: 8,
          }}>
          <View
            style={{
              width: this.props.width * 0.25,
              height: this.props.height,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconBig
              size={55}
              icon={require('../res/icon/file-fore.png')}
              iconSize={30}
              iconBackgroundColor={'#66ccff'}
            />
          </View>
          <View
            style={{
              width: this.props.width * 0.5,
              eight: this.props.height,
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              backgroundColor: '#ffffff',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'PingFangSC-regular',
              }}>
              {this.props.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color:'#A6A6A6',
                fontFamily: 'PingFangSC-regular',
              }}>
              {this.props.detail}
            </Text>
          </View>
          <View
            style={{
              width: this.props.width * 0.25,
              height: this.props.height,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IconBig
              size={40}
              icon={require('../res/icon/pencil.png')}
              iconSize={18}
              iconBackgroundColor={'#2D77F9'}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default SectionMedium;
