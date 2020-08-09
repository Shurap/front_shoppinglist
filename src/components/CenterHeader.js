import * as React from 'react'
import { Text } from 'react-native'
import { useSelector } from 'react-redux'
import { StyleSheet } from 'react-native'

const CenterHeader = () => {

  const title = useSelector((state) => state.app.pageTitle)

  return (
    <Text style={styles.container}>
      {title}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontSize: 18
  }
});

export default CenterHeader

