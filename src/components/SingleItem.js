import * as React from 'react'
import { View, Text } from 'react-native'

const SingleItem = (props) => {

  return (
    <View >
      <Text>note: {props.note}</Text>

      {/* listId={props.id}
          id={element._id}
          note={element.note}
          count={element.count}
          completed={element.completed} */}
    </View>
  )
}

export default SingleItem