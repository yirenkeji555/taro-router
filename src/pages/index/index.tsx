import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro from "@tarojs/taro";

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View onClick={() => {
              Taro.redirectTo({ url: "pages/index2/index" });
            }}>2</View>
            <View onClick={() => {
              Taro.redirectTo({ url: "pages/index3/index" });
            }}>3</View>
            <View onClick={() => {
              Taro.redirectTo({ url: "pages/index4/index" });
            }}>4</View>
            <View onClick={() => {
              Taro.redirectTo({ url: "pages/index5/index" });
            }}>5</View>
      </View>
    )
  }
}
