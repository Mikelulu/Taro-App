import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

class App extends Component {
  config = {
    pages: [
      'pages/home/home',
      'pages/find/find',
      'pages/mine/mine'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      backgroundColor: '#fff',
      color: '#8a8a8a',
      selectedColor: 'black',
      list: [
        {
          pagePath: 'pages/home/home',
          text: '首页',
          iconPath: './asset/home_normal.png',
          selectedIconPath: './asset/home_selected.png'
        },
        {
          pagePath: 'pages/find/find',
          text: '发现',
          iconPath: './asset/yan_normal.png',
          selectedIconPath: './asset/yan_selected.png'
        },
        {
          pagePath: 'pages/mine/mine',
          text: '我的',
          iconPath: './asset/mine_noraml.png',
          selectedIconPath: './asset/mine_selected.png'
        }
      ]

    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
