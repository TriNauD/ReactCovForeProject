import React, {Component, PropTypes} from 'react';
import {View, Image} from 'react-native';
class IconBig extends Component {
  static defaultProps = {
    size: 100,
    icon: require('../res/icon/file-add.png'),
    iconSize: 60,
    iconBackgroundColor: '#66ccff',
  };
  render() {
    const {backgroundColor, size, icon} = this.props;
    return (
      <View
        style={{
          height: this.props.size,
          width: this.props.size,
          borderRadius: 2 * this.props.size,
          backgroundColor: this.props.iconBackgroundColor,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={this.props.icon}
          style={{
            height: this.props.iconSize,
            width: this.props.iconSize,
          }}></Image>
      </View>
    );
  }
}

export default IconBig;
