import * as React from 'react'
import { View } from 'react-native'
import { Button, Text } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { changeItemForSaga } from '../redux/actions/actionItem'


const SingleItem = (props) => {

  const userId = useSelector((state) => state.user.userId)
  const dispatch = useDispatch()

  const onClickItem = () => {
    dispatch(changeItemForSaga({
      userId,
      listId: props.listId,
      id: props.id,
      note: props.note,
      count: props.count,
      completed: (!props.completed)
    }))
  }

  return (
    <View >
      <Text onPress={onClickItem}>
        note: {props.note}
        count: {props.count}
        completed: {(props.completed) ? 'T' : 'F'}
      </Text>

      {/* listId={props.id}
          id={element._id}
          note={element.note}
          count={element.count}
          completed={element.completed} */}
    </View>
  )
}

export default SingleItem