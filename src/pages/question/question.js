import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

export default class Question extends Component {

  config = {
    navigationBarTitleText : '问题'
  }
  
  render() {

    return(
      <View>Question</View>
    )
  }
}