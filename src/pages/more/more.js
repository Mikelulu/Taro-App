
import Taro, { Component } from '@tarojs/taro';
import {
  View, Image, Text
} from '@tarojs/components';

import './more.scss'

import eyePng from '../../asset/images/eye.png'
import starPng from '../../asset/images/star.png'
import draftPng from '../../asset/images/draft.png'
import recentPng from '../../asset/images/recent.png'
import bookPng from '../../asset/images/book.png'
import livePng from '../../asset/images/live.png'
import zhiPng from '../../asset/images/zhi.png'

import ItemCell from '../../components/itemCell/itemCell'


export default class More extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  constructor(props) {

    super(props)
    this.state = {
      imageArr: [eyePng, starPng, draftPng, recentPng, bookPng, livePng, zhiPng],
      titleArr: ['我的关注', '我的收藏', '我的草稿', '最近浏览', '我的书架', '我的 Live', '我的值乎'],

      choosedImage: null
    }
  }

  /**
   * 点击item
   */
  itemSelected = (index) => {
    console.log(index)
    Taro.showToast({
      title: this.state.titleArr[index],
      icon: 'none'
    })
  }

  /**
   * 个人中心
   */
  userInfo = () => {
    Taro.showToast({
      title: '个人中心',
      icon: 'none'
    })
  }
  /**
   * 换头像
   */
  changeAvatar = (e) => {
    // 阻止事件冒泡
    e.stopPropagation()

    Taro.chooseImage({
      count: 1,
    }).then(res => {
      console.log(res)
      // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
      let tempFilePaths = res.tempFilePaths
      this.setState({
        choosedImage: tempFilePaths[0]
      })
    }).catch(err => {
      console.log(err)
    })

    // Taro.showActionSheet({
    //   itemList: ['拍照', '从手机相册中选择']
    // }).then((res) => {
    //   console.log(res.errMsg, res.tapIndex)
      
    // }).catch((err) => {
    //   console.log(err)
    // })
  }

  render() {
    return(
      <View className='more'>
        <View className='user flex-wrp' onClick={this.userInfo}>
          <View className='flex-item'>
            <Image className='avatar' src={this.state.choosedImage ? this.state.choosedImage : 'https://image.ibb.co/nKV5Cy/default_avatar.jpg'} onClick={this.changeAvatar}></Image>
          </View>
          <View className='user-info flex-item'>
            <Text className='userinfo-nickname'>阿集</Text>
            <Text className='edit'>查看或编辑个人主页</Text>
          </View>
        </View>
        
        <View className='my'>
          {
            this.state.titleArr.map((title) => {
              let index = this.state.titleArr.indexOf(title)
              let img = this.state.imageArr[index]

              return (
                <View key={index} onClick={this.itemSelected.bind(this, index)}>
                  <ItemCell 
                    src={img}
                    title={title}
                  ></ItemCell>
                </View>
                
              )
            })
          }
        </View>
      </View>
    )
  }
}