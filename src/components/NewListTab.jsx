import * as React from 'react'
import { View } from 'react-native'
import { Button, Text, Input } from 'react-native-elements'
import { StyleSheet } from 'react-native'
import { ColorPicker, IconPicker } from 'react-native-btr'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addNewListForSaga } from '../redux/actions/actionList'
//TODO Delete expo/vector-icons
import { MaterialIcons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialIcons'


const NewListTab = () => {

  const dispatch = useDispatch()

  const userId = useSelector((state) => state.user.userId)

  const [listName, setListName] = useState('')
  //TODO add default value:
  const [listColor, setListColor] = useState('')
  const [listIcon, setListIcon] = useState('')

  const onChangeListName = (text) => {
    setListName(text)
  }

  const addNewList = async () => {
    dispatch(addNewListForSaga({ listName, listColor, listIcon, userId }))
  }

  const arrayIcons = [
    'accessible',
    'list'
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.wrapperText}>
          <Text style={styles.text}>Create new list</Text>
        </View>
      </View>
      <View style={styles.body}>
        <Input
          containerStyle={{ width: '80%' }}
          label="New list"
          placeholder="list name"
          onChangeText={onChangeListName}
          value={listName}
        />
      </View>
      <ColorPicker
        selectedColor={listColor}
        onSelect={selectedColor => setListColor(selectedColor)}
      />
      <IconPicker
        icons={arrayIcons}
        selectedIcon={listIcon}
        onSelect={selectedIcon => setListIcon(selectedIcon)}
      />
      <Button
        title="Add new list"
        type="clear"
        onPress={addNewList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  },
  header: {
    flexDirection: 'row',
    margin: 5,
    backgroundColor: 'green',
    height: 50,
    // width: '100%',
    alignItems: 'center',
    // justifyContent: 'flex-start',

  },
  text: {
    color: 'white',
  },
  wrapperText: {
    flex: 1,
    // borderWidth: 2,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'

  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default NewListTab