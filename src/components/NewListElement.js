import * as React from 'react'
import { View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { deleteListForSaga } from '../redux/actions/actionList'
import { StyleSheet } from 'react-native'

const NewListElement = (props) => {

  return (
    <View style={styles.container}>

      <View style={{flex: 4}}>
        <Input
          placeholder="new element name"
        // onChangeText={onChangeListName}
        // value={listName}
        />
      </View>

      <View style={{flex: 1}}>
        <Input
          placeholder="count"
        // onChangeText={onChangeListName}
        // value={listName}
        />
      </View>

      <View style={{flex: 1}}>
        <Button
          title="Add"
          type="clear"
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'stretch',
    // justifyContent: 'flex-start',
    // borderWidth: 2,
    flexDirection: 'row',
  }
})

export default NewListElement