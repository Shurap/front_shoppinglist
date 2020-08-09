import * as React from 'react'
import { Text, View } from 'react-native'
import { Overlay, Button } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { deleteListForSaga } from '../redux/actions/actionList'

const DeleteList = (props) => {

  const dispatch = useDispatch()

  const userId = useSelector((state) => state.user.userId)

  const onDeleteList = () => {
    dispatch(deleteListForSaga({
      listId: props.route.params.id,
      userId
    }))
  }

  return (
    <View>
      <Text>Deleting list {props.route.params.title}</Text>
      <Text>Are you sure?</Text>
      <Button
        title="Ok"
        type="clear"
        onPress={onDeleteList}
      />
      <Button
        title="Cancel"
        type="clear"
        onPress={() => props.navigation.navigate('List')}
      />
    </View>
  )
}

export default DeleteList