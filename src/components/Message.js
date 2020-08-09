import * as React from 'react'
import { Text, View } from 'react-native'
import { Overlay, Button } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { messageOff } from '../redux/actions/actionApp'
import { useDispatch } from 'react-redux'

const Message = () => {

  const message = useSelector((state) => state.app.message)
  const visible = useSelector((state) => state.app.visibleModal)
  const dispatch = useDispatch()

  return (
    (visible) ?
      <Overlay
        isVisible
        onBackdropPress={() => dispatch(messageOff())}
      >
        <View>
          <Text>{message}</Text>
          <Button
            title="Ok"
            type="clear"
            onPress={() => dispatch(messageOff())}
          />
        </View>
      </Overlay > : null
  )
}

export default Message