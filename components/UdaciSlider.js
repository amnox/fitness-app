import React from 'react'
import { View, Text, Slider } from 'react-native'

export default function UdaciSliders ({max,unit,step,value,onChange}){
  return (
    <View>
      <Slider
        step={step}
        value={value}
        minimumValue={0}
        maximumValue={max}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}
