import React, {Component, PropTypes} from 'react';
import {View, Image} from 'react-native';
class IconBig extends Component {
  static defaultProps = {
    backgroundColor: '#66ccff',
    size: 100,
    iconSize: 60,
    icon: require('../res/icon/file-add.png'),
  };
  render() {
    const {backgroundColor, size, icon} = this.props;
    return (
      <View
        style={{
          height: this.props.size,
          width: this.props.size,
          borderRadius: 2 * this.props.size,
          backgroundColor: this.props.backgroundColor,
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
