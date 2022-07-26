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
        <Text onClick={() => {
              Taro.redirectTo({ url: "pages/index/index" });
            }}>5555</Text>
      </View>
    )
  }
}
