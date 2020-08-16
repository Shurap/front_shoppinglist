import * as React from 'react'
import { View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { deleteListForSaga } from '../redux/actions/actionList'
import { StyleSheet } from 'react-native'

const ToDoList = (props) => {

  return (
    <View style={styles.container}>

      <Text>ToDoList</Text>
      {props.array}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'stretch',
    // justifyContent: 'flex-start',
    // borderWidth: 2,
    // flexDirection: 'row',
  }
})

export default ToDoList