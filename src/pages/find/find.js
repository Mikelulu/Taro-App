/*
 * @Author: michael 
 * @Date: 2018-06-17 23:44:39 
 * @Last Modified by:   michael 
 * @Last Modified time: 2018-06-17 23:44:39 
 */


import Taro, { Component } from '@tarojs/taro'
import {
    View,
    Text,
} from '@tarojs/components'

export default class Find extends Component {
    
    config = {
        navigationBarTitleText: '找片' 
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
                <Text>找片</Text>
            </View>
        )
    }
}