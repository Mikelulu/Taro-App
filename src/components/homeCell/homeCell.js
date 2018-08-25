
import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components';

import more from '../../asset/images/more.png'


export default class HomeCell extends Component {

  navigateTo = (url) => {
    Taro.navigateTo({
      url: url
    })
  }

  render() {
    
    let model = this.props.model;
    return(

      <View className='home-cell' onClick={this.navigateTo.bind(this, '/pages/answer/answer?id=2&type=test')}>

        {/* 顶部 */}
        <View className='cell-top'>
          <View className='top-left'>
            <Image className='avatar' src={model.feed_source_img}></Image>
            <View>{model.feed_source_name}</View>
          </View>
          <Image className='more' src={more} onClick={this.navigateTo.bind(this, '/pages/question/question',)}></Image>
        </View>

        {/* 中间内容 */}
        <View className='cell-content'>
          <View style='font-size: 16px; color: #333333'>{model.question}</View>
          <View>{model.answer_ctnt}</View>
        </View>

        {/* 底部 */}
        <View className='cell-bottom'>
          <View style='margin-right: 10px'>{model.good_num}  赞同</View>
          <View style='margin-right: 10px'>{model.comment_num}  评论</View>
          <View>关注问题</View>
        </View>

      </View>
    )
  }
}