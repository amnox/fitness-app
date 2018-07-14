import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { white, purple } from '../utils/colors'

export default class UdaciSliders extends React.Component{
  render(){
    const {max, unit, step, value, onIncrement, onDecrement} = this.props
    return (
      <View style={[style.row, { justifyContent: 'space-between' }]}>
        {Platform.OS === 'ios'
          ? <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
              style={[style.iosBtn,{borderTopRightRadius:0,borderBottomRightRadius:0}]}
              onPress={onDecrement}>
              <FontAwesome name='minus' size={30} color={purple} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[style.iosBtn,{borderTopLeftRadius:0,borderBottomLeftRadius:0}]}
              onPress={onIncrement}>
              <FontAwesome name='plus' size={30} color={purple} />
            </TouchableOpacity>
          </View>
          : <View style={{flexDirection:'row'}}>
            <TouchableOpacity 
              style={[style.androidBtn,{borderTopRightRadius:0,borderBottomRightRadius:0}]}
              onPress={onDecrement}>
              <FontAwesome name='minus' size={30} color={white} />
            </TouchableOpacity>
            <TouchableOpacity 
              style={[style.androidBtn,{borderTopLeftRadius:0,borderBottomLeftRadius:0}]}
              onPress={onIncrement}>
              <FontAwesome name='plus' size={30} color={white} />
            </TouchableOpacity>
          </View>
        }
        
        <View style={style.metricCounter}>
          <Text style={{fontSize:24, textAlign:'center'}}>{value}</Text>
          <Text style={{fontSize:18, textAlign:'center'}}>{unit}</Text>
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
  },
  androidBtn:{
    margin: 5,
    backgroundColor: purple,
    padding: 5,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 2
  },
  metricCounter: {
    width:85,
    justifyContent:'center',
    alignItems: 'center'
  }
})