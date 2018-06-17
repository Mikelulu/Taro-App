/*
 * @Author: michael 
 * @Date: 2018-06-17 23:44:46 
 * @Last Modified by: michael
 * @Last Modified time: 2018-06-18 00:32:25
 */


import Taro, { Component } from '@tarojs/taro'
import {
    View,
    Text,
} from '@tarojs/components'

export default class Home extends Component {
    
    config = {
        navigationBarTitleText: '首页' 
    }

    constructor(props) {
        super(props)
    }
    /**
     * 生命周期
     */
    componentWillMount() {

    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    componentDidShow() {

    }
    componentDidHide() {

    }

    render() {
        return(
            <View>
                <Text>首页</Text>
            </View>
        )
    }
}