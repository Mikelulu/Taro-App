/*
 * @Author: michael 
 * @Date: 2018-08-15 17:59:35 
 * @Last Modified by: michael
 * @Last Modified time: 2018-08-25 13:51:04
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Image, ScrollView, Input } from '@tarojs/components'
import './index.scss'

import searchPng from '../../asset/images/search.png'
import lightingPng from '../../asset/images/lighting.png'
import HomeCell from '../../components/homeCell/homeCell';

export default class Index extends Component {
  
  config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      dataList: []
    }
  }
  componentWillMount () { }

  componentDidMount () {
    this.loadData()
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh () {
    console.log('下拉刷新')

    Taro.stopPullDownRefresh()

    setTimeout(() => {
      this.updateList()
    }, 500)
    
  }

  /**
   * 加载数据
   */
  loadData = (isLoadMore) => {
    Taro.showLoading({ title: '加载中...'})
    Taro.request({
      url: 'https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed'
    }).then( res => {
      Taro.hideLoading()
      console.log(res)
      if (res.data.success) {
        // setState 为异步
        // concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
        this.setState({
          loading: false,
          dataList: isLoadMore ? this.state.dataList.concat(res.data.data) : res.data.data
        })
      }
    })
  }
  /**
   * 更显数据
   */
  updateList = () => {
    if (this.state.loading) {
      return
    }
    this.setState({
      loading: true
    })
    this.loadData()
  }
  
  /**
   * 上拉加载更多数据
   */
  appendNextPageList = () => {
    if (this.state.loading) {
      return
    }
    this.setState({
      loading: true
    })

    this.loadData(true)
  }
  /**
   * 渲染界面
   */
  render () {
    
    return (
      <View>
        
        <ScrollView className='list' 
          scrollY
          scrollWithAnimation
          enableBackToTop
          scrollTop='0'
          // onScrollToUpper={this.updateList}
          // onScrollToLower={this.appendNextPageList}
        >
          {
            this.state.dataList.map((item) => {
              return(
                <HomeCell
                  key={item}
                  model={item}
                >
                </HomeCell>
              )
            })
          }
        </ScrollView>

        <View className='topView'>
          <View className='search'>
            <Image src={searchPng}></Image>
            <Input type='text' placeholder='搜索话题, 问题或人' placeholderClass='placeholder-Class'></Input>
          </View>
          <View className='topRight'>
            <Image src={lightingPng} onClick={this.updateList}></Image>
          </View>
        </View>
        
      </View>
    )
  }
}

