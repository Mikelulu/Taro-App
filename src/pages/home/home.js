/*
 * @Author: michael 
 * @Date: 2018-06-17 23:44:46 
 * @Last Modified by: michael
 * @Last Modified time: 2018-06-21 22:14:40
 */


import Taro, { Component } from '@tarojs/taro'
import {
    View,
    Text,
    Button,
} from '@tarojs/components'

export default class Home extends Component {
    
    config = {
        navigationBarTitleText: '首页' 
    }

    constructor(props) {
        super(props)

        this.state = {
            current_index: 0,
        }
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
    titleOnClick = (index) => {
    
        this.setState({
            current_index: 1
        })
    }
    render() {
        let current_index = this.state.current_index;
        return(
            <View className="home">
                {/* 分割线 */}
                <View className='home_topLine'></View>
                <View className='home_titleContainer'>
                        <Text 
                            className='home_titleContainer_title' 
                            style={current_index===0 ? 'color: #333333' : ''}
                            current="0"
                            onClick={this.titleOnClick.bind(this, current_index)}>
                            正在热映
                        </Text>
                        <Text 
                            className='home_titleContainer_title' 
                            style={current_index===1 ? 'color: #333333' : ''}
                            current="1"
                            onClick={this.titleOnClick.bind(this, current_index)}>
                            即将上映
                        </Text>
                 </View>
                
                 <View className="home_indicatorContainer">
                    <View 
                        className="home_indicatorContainer_indicator"
                        style={current_index===0 ? '': 'display: none'}
                    >
                    </View>
                    <View 
                        className="home_indicatorContainer_indicator"
                        style={current_index===1 ? 'margin-left: 50%': 'display: none'}
                    ></View>
                 </View>
            </View>
        )
    }
}