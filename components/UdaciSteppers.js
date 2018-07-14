import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, purple } from '../utils/colors'

export default class UdaciSliders extends React.Component{
  render(){
    const {max, unit, step, value, onIncrement, onDecrement} = this.props
    return (
      <View style={[StyleSheet.row, { justifyContent: 'space-between' }]}>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity 
            style={style.iosBtn}
            onPress={onDecrement}>
            <FontAwesome name='minus' size={30} color={'black'} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={style.iosBtn}
            onPress={onIncrement}>
            <FontAwesome name='plus' size={30} color={'black'} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>{value}</Text>
          <Text>{unit}</Text>
        </View>
      </View>
    )
  }
}

style = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex:1,
    alignItems: 'center'
  },
  iosBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    borderRadius: 3,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
  }
})