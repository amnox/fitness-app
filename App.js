import React from 'react'
import { 
  StyleSheet, 
  Text, 
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AddEntry from './components/AddEntry'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
  handlePress = () => {
    alert('hello!')
  }
  render() {
    return (
      <Provider store = {createStore(reducer)}>
        <View style={{flex: 1}}>
          <AddEntry/>
        </View>
      </Provider>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft:10,
    paddingRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#E53224',
    padding:10,
    paddingLeft:50,
    paddingRight: 50,
    justifyContent:'center',
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
});
