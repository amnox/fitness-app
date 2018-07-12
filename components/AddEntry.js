import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  getMetricMetaInfo
} from '../utils/helpers'
import UdaciSlider from './UdaciSlider'
import UdaciSteppers from './UdaciSteppers'

export default class AddEntry extends React.Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  }
  increament = (metric) => {
    const {
      max,
      step
    } = getMetricMetaInfo(metric)

    this.setState((state) => {
      const count = state[metric] + step
    })

    return {
      ...state,
      [metric]: cont > max ? max : count
    }
  }

  decreament = (metric) => {
    this.setState((state) => {
      const count = state[metric] + getMetricMetaInfo(metric).step
    })

    return {
      ...state,
      [metric]: cont < 0 ? 0 : count
    }
  }

  slide = (metric, value) => {
      this.setState(()=>({
        [metric]:value
      }))
  }

  render() {
    return ( 
      <View>
        <Text> Add Entry Component </Text> 
        {
          getMetricMetaInfo('bike').getIcon()
        }
      </View>
    )
  }
}