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

export default class App extends React.Component {
  handlePress = () => {
    alert('hello!')
  }
  render() {
    return (
      <View style={styles.container}>
        <AddEntry/>
        <TouchableHighlight style={styles.btn} onPress={this.handlePress} underlayColor='#d4271b'>
          <Text>Touchable Highlight</Text>
        </TouchableHighlight>
      </View>
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
