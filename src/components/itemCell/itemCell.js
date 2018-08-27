

import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';

export default class ItemCell extends Component {


  render() {
    
    return(
      <View className='item-cell'>
      <Image src={this.props.src}></Image>
      <View className='des'>
        <Text>{this.props.title}</Text>
      </View>
    </View>
    )
  }
}