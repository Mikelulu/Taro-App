
import Taro, { Component } from '@tarojs/taro';
import {
  View, Image
} from '@tarojs/components';

import './answer.scss'

import icon from '../../asset/images/1444983318907-_DSC1826.jpg'
import goodBad from '../../asset/images/good-bad.png'
import img3 from '../../asset/images/flag.png'
import img4 from '../../asset/images/heart2.png'
import img5 from '../../asset/images/star2.png'
import img6 from '../../asset/images/comment.png'

export default class Answer extends Component {

  config = {
    navigationBarTitleText : '答案'
  }

  constructor(props) {
    super(props)

    this.state = {
      pixelRatio: 0,
      screenWidth: 0,
      screenHeight: 0,
      windowWidth: 0,
      windowHeight: 0,
      statusBarHeight: 0,

      titleArr: ['没有帮助', '感谢', '收藏', '302'],
      imageArr: [img3, img4, img5, img6]
    }
  }
  componentDidMount() {
    // 接收传递的参数
    console.log(this.$router.params)

    Taro.getSystemInfo({
      success: function(res) {
        console.log(res)
      }
    }).then( (res) => {

      this.setState({
        pixelRatio: res.pixelRatio,
        screenWidth: res.screenWidth,
        screenHeight: res.screenHeight,
        windowWidth: res.windowWidth,
        windowHeight: res.windowHeight,
        statusBarHeight: res.statusBarHeight, 
      })
    })
  }

  /**
   * 点击底部的item
   * @param {*} index 
   */
  itemClicked(index) {
    console.log(index)

    var title = ""

    if (index === 0) {
      title = "没有帮助"
    } else if (index === 1) {
      title = "感谢"
    } else if (index === 2) {
      title = "收藏"
    } else if (index === 3) {
      title = "评论"
    } else if (index === 4) {
      
    }

    Taro.showToast({ title: title, icon: 'none'})
  }

  render() {
    console.log(this.state.pixelRatio)
    console.log(this.state.screenWidth)
    console.log(this.state.screenHeight)
    console.log(this.state.windowWidth)
    console.log(this.state.windowHeight)
    console.log(this.state.statusBarHeight)

    return (
      <View className='container'>

        <View className='question'>
          选择 Kindle 而不是纸质书的原因是什么？
        </View>
        <View className='content'>
          难道不明白纸质书更贵啊！！！
          若觉得kindle更贵，我觉得要么阅读量太少，那确实没有买kindle的必要。要么买的都是盗版的纸质书？我不清楚不加以评论。。。
          另外，用kindle看小说的怎么真心不懂了。题主不看小说么？难道题主拿来看教科书还是技术文档？还是题主觉得小说就是小时代内样的？（对小时代没偏见，尊重多样性）
          而且纸质书搬起来真心困难啊！当初毕业带不回来，忍痛卖了不少好桑心！
          碎片时间阅读总不能天天背着一本书吧，那么占地方。
          看到描述最后一段，感觉有骗答案的嫌疑
        </View>
        <Image className='image' src={icon}></Image>

        {/* 底部 */}
        <View className='bottom'>

          <View className='left'>
            <Image src={goodBad}></Image>
            <View>2.1k</View>
          </View>
          {
            this.state.titleArr.map((title) => {
              console.log(title);
              let index = this.state.titleArr.indexOf(title)
              console.log(index);
              return(
                <View className='item' onClick={this.itemClicked.bind(this, index)}>
                  <Image src={this.state.imageArr[index]}></Image>
                  <View>{title}</View>
                </View>
              )
            })
          }
        </View>
      </View>
    )
  }
}